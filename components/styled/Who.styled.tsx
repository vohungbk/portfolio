import Image from 'next/image'
import styled from 'styled-components'

export const WhoStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  padding: 4rem 5vw;
  z-index: 2;

  @media (min-width: 1024px) {
    padding-left: 10vw;
    padding-right: 10vw;
  }

  > section {
    width: 100%;
    max-width: 1100px;
  }
`

export const IntroRowStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
`

export const AvatarStyled = styled(Image)`
  flex-shrink: 0;
  width: 225px;
  height: 225px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.15);

  @media (min-width: 1024px) {
    width: 280px;
    height: 280px;
  }
`

export const TitleStyled = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`

export const FactsStyled = styled.p`
  margin: 0.5rem 0 1.25rem;
  font-size: 1rem;
  color: rgb(156 163 175);
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`

export const InfoStyled = styled.div`
  max-width: 40rem;
  color: rgb(229 231 235);
  font-size: 1.125rem;
  line-height: 1.75rem;

  p {
    margin: 0 0 1rem;
  }
`

export const StackHeadingStyled = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
`

export const StackSubtitleStyled = styled.p`
  margin: 0.5rem 0 0;
  text-align: center;
  font-size: 1.0625rem;
  line-height: 1.75rem;
  color: rgb(229 231 235);
`

export const LegendStyled = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.5rem 0 1.5rem;
  font-size: 0.875rem;
  color: rgb(156 163 175);

  span {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 999px;
    border: 1px solid rgba(138, 180, 248, 0.7);
    background-color: rgba(138, 180, 248, 0.18);
  }
`

export const StackStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    > :first-child {
      grid-column: 1 / -1;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    > :first-child {
      grid-column: span 2;
    }
  }
`

export const CategoryStyled = styled.div`
  padding: 1rem 1.25rem 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.02);

  h4 {
    margin: 0 0 0.75rem;
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: rgb(156 163 175);
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

export const TechItemStyled = styled.li<{ $core?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.65rem;
  border: 1px solid
    ${({ $core }) =>
      $core ? 'rgba(138, 180, 248, 0.6)' : 'rgba(255, 255, 255, 0.15)'};
  border-radius: 999px;
  background-color: ${({ $core }) =>
    $core ? 'rgba(138, 180, 248, 0.12)' : 'rgba(255, 255, 255, 0.05)'};
  font-size: 0.875rem;
  font-weight: ${({ $core }) => ($core ? 600 : 400)};
  color: rgb(229 231 235);
`

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`
