import styled from 'styled-components'

export const WhoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5vw;
  padding-left: 5vw;
  padding-right: 5vw;
  z-index: 2;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    padding-left: 15vw;
    padding-right: 15vw;
    min-height: 70vh;
  }
`

export const AvatarStyled = styled.img`
  width: 225px;
  height: 225px;
  border-radius: 9999px;
`

export const TitleStyled = styled.h1`
  font-size: 40px;
  line-height: 60px;
`

export const InfoStyled = styled.p`
  color: rgb(229 231 235);
  font-size: 1.125rem;
  line-height: 1.75rem;
`
