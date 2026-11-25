import { FC, useEffect, useRef, useState } from 'react'
import { BiCheck, BiCopy } from 'react-icons/bi'
import type { ProjectDemoAccess } from '../shared/types'
import {
  CopyButtonStyled,
  CredentialRowStyled,
  DemoAccessStyled,
  VisuallyHidden,
} from './styled/DemoAccess.styled'

type CopyStatus = 'idle' | 'copied' | 'error'

// Clipboard API first; fall back to execCommand where it is unavailable or blocked
const copyText = async (value: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    const field = document.createElement('textarea')
    field.value = value
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.opacity = '0'
    document.body.appendChild(field)
    field.select()
    try {
      return document.execCommand('copy')
    } catch {
      return false
    } finally {
      document.body.removeChild(field)
    }
  }
}

interface CredentialRowProps {
  label: string
  value: string
}

const CredentialRow: FC<CredentialRowProps> = ({ label, value }) => {
  const [status, setStatus] = useState<CopyStatus>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleCopy = async () => {
    setStatus((await copyText(value)) ? 'copied' : 'error')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setStatus('idle'), 2000)
  }

  return (
    <CredentialRowStyled>
      <dt>{label}</dt>
      <dd>
        <code>{value}</code>
        <CopyButtonStyled
          type="button"
          onClick={handleCopy}
          aria-label={`Copy demo ${label.toLowerCase()}`}
          data-status={status}
        >
          {status === 'copied' ? <BiCheck size={18} /> : <BiCopy size={18} />}
          <span>
            {status === 'copied'
              ? 'Copied!'
              : status === 'error'
                ? 'Copy failed'
                : 'Copy'}
          </span>
        </CopyButtonStyled>
        <VisuallyHidden role="status" aria-live="polite">
          {status === 'copied' && `Demo ${label.toLowerCase()} copied`}
          {status === 'error' &&
            `Could not copy the demo ${label.toLowerCase()}. Select it manually.`}
        </VisuallyHidden>
      </dd>
    </CredentialRowStyled>
  )
}

const DemoAccess: FC<{ access: ProjectDemoAccess }> = ({ access }) => (
  <DemoAccessStyled aria-label="Demo account">
    <p>Demo account (public, demo data only)</p>
    <dl>
      <CredentialRow label="Email" value={access.email} />
      <CredentialRow label="Password" value={access.password} />
    </dl>
  </DemoAccessStyled>
)

export default DemoAccess
