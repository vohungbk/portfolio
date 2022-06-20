import styled from 'styled-components'

export const ContactStyled = styled.div`
  padding-bottom: 5rem;
`

export const TitleStyled = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
`

export const ContentStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-left: 5vw;
  margin-right: 5vw;
`

export const InfoStyled = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  div {
    flex: 1 1 0%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const BtnSendStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  transition-duration: 0.3s;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  color: rgb(255 255 255);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgb(24 118 210);
  border-radius: 0.25rem;
  margin-top: 0.5rem;
  cursor: pointer;
  background-image: none;
`

export const TitleSocialStyled = styled.h1`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 0.75rem;
`

export const SocialLinksStyled = styled.a`
  transition-duration: 0.3s;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`
