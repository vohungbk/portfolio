import styled, { keyframes } from 'styled-components'
import { m } from 'framer-motion'
import { BiChevronsDown } from 'react-icons/bi'

const bounce = keyframes`
  0%,
  to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}
  50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}
`

export const IntroStyled = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  min-height: 100vh;
  padding: 5rem 1.25rem 8rem;
  box-sizing: border-box;
`

export const Title = styled(m.h1)`
  z-index: 1;
  margin: 0;
  max-width: 100%;
  font-size: clamp(1.75rem, 5vw, 3rem);
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-align: center;
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

export const Tagline = styled(m.p)`
  z-index: 1;
  max-width: 40rem;
  margin: 0;
  font-size: clamp(1.0625rem, 2.2vw, 1.375rem);
  line-height: 1.5;
  text-align: center;
  color: rgb(229 231 235);
`

export const Description = styled(m.p)`
  z-index: 1;
  max-width: 34rem;
  margin: 0;
  font-size: clamp(0.9375rem, 1.6vw, 1.0625rem);
  line-height: 1.6;
  text-align: center;
  color: rgb(156 163 175);
`

export const CtaGroup = styled(m.div)`
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1rem;
  width: 100%;

  @media (max-width: 479px) {
    flex-direction: column;
    align-items: stretch;
    max-width: 20rem;
  }
`

export const CtaLink = styled.a<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.75rem;
  border-radius: 0.375rem;
  border: 1px solid
    ${({ $primary }) => ($primary ? '#1876d2' : 'rgba(255, 255, 255, 0.3)')};
  background-color: ${({ $primary }) => ($primary ? '#1876d2' : 'transparent')};
  color: rgb(255 255 255);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${({ $primary }) =>
      $primary ? '#1565c0' : 'rgba(255, 255, 255, 0.1)'};
    border-color: ${({ $primary }) =>
      $primary ? '#1565c0' : 'rgba(255, 255, 255, 0.5)'};
  }
  &:focus-visible {
    outline: 3px solid #8ab4f8;
    outline-offset: 2px;
  }
`

export const ScrollBtn = styled(m.a)`
  position: absolute;
  left: calc(50% - 28px);
  bottom: 3vh;
  cursor: pointer;

  &:focus-visible {
    outline: 3px solid #8ab4f8;
    outline-offset: 2px;
  }
  @media (max-height: 700px) {
    display: none;
  }
`

export const Icon = styled(BiChevronsDown)`
  animation: ${bounce} 1s infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
