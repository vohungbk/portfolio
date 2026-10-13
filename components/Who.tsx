import React, { FC } from 'react'

import {
  AvatarStyled,
  InfoStyled,
  TitleStyled,
  WhoStyled,
} from './styled/Who.styled'

const Who: FC = () => {
  return (
    <WhoStyled id="who">
      <AvatarStyled
        data-scroll
        data-scroll-speed="2"
        src="/images/avatar.png"
        alt="Avatar"
      />
      <div>
        <TitleStyled data-scroll data-scroll-speed="0.5">
          Who am I?
        </TitleStyled>
        <InfoStyled id="story">
          Hi, I'm Hung Vo 👋
          <br />
          I'm a Full-Stack Developer based in Da Nang, Vietnam, with 7+ years of
          experience building web applications. I work primarily with React,
          Next.js, and TypeScript on the frontend, and NestJS, Node.js, and
          PHP/Laravel on the backend. I enjoy building complete web solutions,
          from crafting responsive user interfaces to developing APIs and
          integrating databases. My goal is to write clean, maintainable code
          and turn complex requirements into reliable, user-friendly products.
          When I'm not coding, you'll probably find me listening to music or
          playing video games.
        </InfoStyled>
      </div>
    </WhoStyled>
  )
}

export default Who
