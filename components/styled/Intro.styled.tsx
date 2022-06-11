import styled from 'styled-components'
import { m } from 'framer-motion'

export const IntroStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
`
export const Paragraphs = styled(m.p)`
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  overflow: hidden;
  z-index: 1;
`
export const ScrollBtn = styled(m.a)`
  position: absolute;
  left: calc(50% - 23px);
  bottom: 10vh;
  cursor: pointer;
`
