import styled from 'styled-components'

export const DemoAccessStyled = styled.section`
  margin-top: 1.25rem;
  padding: 0.875rem 1rem;
  border: 1px dashed rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.03);

  > p {
    margin: 0 0 0.625rem;
    font-size: 0.875rem;
    color: rgb(156 163 175);
  }
  dl {
    margin: 0;
    display: grid;
    gap: 0.625rem;
  }
`

export const CredentialRowStyled = styled.div`
  display: grid;
  gap: 0.25rem;
  @media (min-width: 480px) {
    grid-template-columns: 5.5rem minmax(0, 1fr);
    align-items: center;
  }

  dt {
    font-size: 0.875rem;
    color: rgb(209 213 219);
  }
  dd {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
  code {
    min-width: 0;
    overflow-wrap: anywhere;
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.4);
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.9rem;
    user-select: all;
  }
`

export const CopyButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 44px;
  padding: 0 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 6px;
  background-color: transparent;
  color: rgb(243 244 246);
  font: inherit;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.2s,
    border-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:focus-visible {
    outline: 3px solid #8ab4f8;
    outline-offset: 2px;
  }
  &[data-status='copied'] {
    border-color: #4ade80;
    color: #4ade80;
  }
  &[data-status='error'] {
    border-color: #f87171;
    color: #f87171;
  }
`

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`
