import styled from 'styled-components'

export const SkillStyled = styled.div`
  padding: 80px 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 4;
  @media (min-width: 1024px) {
    min-height: 70vh;
  }
`

export const TitleStyled = styled.div`
  text-align: center;
  font-size: 1.875rem;
  line-height: 2.25rem;
  @media (min-width: 1024px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`
export const DescriptionStyled = styled.p`
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const ListStyled = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    row-gap: 20px;
  }
`

export const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  &:hover {
    img {
      transform: translate(1.1, 1.1) rotate(0) skewX(0) skewY(0) scaleX(1.1)
        scaleY(1.1);
    }
  }
`
export const ImageStyled = styled.img`
  width: 60px;
  height: 60px;
  transition-duration: 0.3s;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`
export const TitleSkillStyled = styled.p`
  text-align: center;
`
