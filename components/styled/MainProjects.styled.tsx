import styled from 'styled-components'

const focusRing = `
  &:focus-visible {
    outline: 3px solid #8ab4f8;
    outline-offset: 2px;
  }
`

export const MainProjectsStyled = styled.section`
  width: 100%;
  padding: 0 5vw;
  box-sizing: border-box;
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`

interface ProjectProps {
  $reversed: boolean
  $largeMedia?: boolean
}

export const ProjectStyled = styled.article<ProjectProps>`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.5rem;
  max-width: 1280px;
  margin: 0 auto 3rem;
  padding: 1.25rem;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.02);

  @media (min-width: 768px) {
    padding: 2rem;
    margin-bottom: 4rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: ${({ $reversed, $largeMedia }) => {
      const media = `minmax(0, ${$largeMedia ? 1.4 : 1.1}fr)`
      return $reversed ? `${media} minmax(0, 1fr)` : `minmax(0, 1fr) ${media}`
    }};
    gap: 3rem;
    align-items: center;
    > :first-child {
      order: ${({ $reversed }) => ($reversed ? 2 : 1)};
    }
    > :last-child {
      order: ${({ $reversed }) => ($reversed ? 1 : 2)};
    }
  }
`

export const InfoStyled = styled.div`
  min-width: 0;

  h3 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
  }
`

export const TaglineStyled = styled.p`
  margin-top: 0.4rem;
  font-size: 1.125rem;
  color: rgb(209 213 219);
`

export const DescriptionStyled = styled.p`
  margin: 1rem 0 1.25rem;
  font-size: 1rem;
  line-height: 1.7;
  color: rgb(209 213 219);
`

export const FeaturesStyled = styled.ul`
  margin: 0 0 1.25rem;
  padding-left: 1.25rem;
  list-style: disc;
  color: rgb(209 213 219);
  line-height: 1.6;
  li {
    margin-bottom: 0.4rem;
  }
`

export const TechListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const TechItemStyled = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.05);
  font-size: 0.875rem;
  color: rgb(229 231 235);
  img {
    width: 20px;
    height: 20px;
  }
`

export const ActionsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-height: 48px;
    padding: 0 1.1rem;
    border-radius: 0.375rem;
    color: rgb(255 255 255);
    text-decoration: none;
    transition:
      background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    ${focusRing}

    &:first-child {
      background-color: #1876d2;
      &:hover {
        background-color: #1565c0;
      }
    }
    &:not(:first-child) {
      background-color: #1b222b;
      border: 1px solid rgba(255, 255, 255, 0.2);
      &:hover {
        background-color: #262e39;
      }
    }
    @media (prefers-reduced-motion: no-preference) {
      &:hover {
        transform: translateY(-1px);
      }
    }
  }
  @media (max-width: 479px) {
    a {
      flex: 1 1 100%;
    }
  }
`

export const MediaStyled = styled.figure<{ $largeMedia?: boolean }>`
  min-width: 0;
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  background-color: rgb(24 24 27);

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: ${({ $largeMedia }) => ($largeMedia ? 'auto' : '2 / 1')};
    object-fit: cover;
    object-position: top left;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media (prefers-reduced-motion: no-preference) {
    &:hover img {
      transform: scale(1.03);
    }
  }
`
