import styled from 'styled-components'

interface StyleProps {
  layout?: string
}

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`
export const MainProjectsStyled = styled.div<StyleProps>`
  display: flex;
  gap: 20px;
  flex-direction: column;

  width: 100%;
  padding-left: 5vw;
  padding-right: 5vw;
  margin-bottom: 5rem;
  @media (min-width: 768px) {
    min-height: 60vh;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
  @media (min-width: 1024px) {
    gap: 50px;
    flex-direction: ${({ layout }) => layout || 'row'};
  }
`

export const CoverImageStyled = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
  }
  > div {
    overflow: hidden;
    border-color: rgb(136 136 136);
    border-width: 2px;
    border-radius: 20px;
    > div {
      border-color: rgb(0 0 0);
      border-width: 8px;
    }
  }
`

export const ImageStyled = styled.img`
  border-radius: 12px;
  width: 100%;
`

export const ItemInfoStyled = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
  }
  h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  p {
    font-size: 20px;
    text-align: justify;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  div:first-of-type {
    display: flex;
    gap: 5px;
  }
  div:last-child {
    display: flex;
    gap: 20px;
    margin-top: 25px;
    a {
      transition-duration: 0.3s;
      transition-property: color, background-color, border-color,
        text-decoration-color, fill, stroke, opacity, box-shadow, transform,
        filter, backdrop-filter, -webkit-text-decoration-color,
        -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

      color: rgb(255 255 255);
      height: 45px;
      padding-left: 15px;
      padding-right: 15px;
      display: flex;
      align-items: center;
      border-radius: 0.25rem;
      &:first-child {
        background-color: #1876d2;
        &:hover {
          background-color: #2884e0;
        }
      }
      &:last-child {
        background-color: #1b222b;
        &:hover {
          background-color: #191e25;
        }
      }
    }
  }
`

export const TechImageStyled = styled.img`
  width: 30px;
  height: 30px;
`
