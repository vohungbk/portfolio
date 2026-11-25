import styled from 'styled-components'

export const SkillStyled = styled.section`
  padding: 70px 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 4;
  @media (min-width: 1024px) {
    min-height: 70vh;
  }
`

export const TitleStyled = styled.h2`
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

export const GridStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 1100px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    > :last-child {
      grid-column: 1 / -1;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    > * {
      grid-column: span 2;
    }
    > :nth-child(n + 4) {
      grid-column: span 3;
    }
  }
`

export const AreaStyled = styled.section`
  padding: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.02);
  transition: border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(255, 255, 255, 0.25);
  }

  h3 {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    color: rgb(243 244 246);
  }
  p {
    margin: 0.25rem 0 1rem;
    font-size: 0.9375rem;
    line-height: 1.5rem;
    color: rgb(156 163 175);
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    position: relative;
    padding: 0.4rem 0 0.4rem 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    font-size: 0.9375rem;
    line-height: 1.5rem;
    color: rgb(229 231 235);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 1.05rem;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 999px;
      background-color: rgba(138, 180, 248, 0.8);
    }
  }
`
