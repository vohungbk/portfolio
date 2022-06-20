import styled from 'styled-components'

export const InputStyled = styled.input`
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: rgb(107 114 128);
  background-color: rgb(16 16 16);
  padding: 0.5rem 0.75rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition-property: color, background-color, border-color, fill, stroke,
    opacity, box-shadow, transform, filter, -webkit-text-decoration-color,
    -webkit-backdrop-filter;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.3s;
  &:focus {
    border-color: rgb(55 65 81);
    box-shadow: 0 0 #0000, 0 0 #0000, 0 0 0 4px #027dff80;
  }
`
