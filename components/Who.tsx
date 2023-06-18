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
          {`Hello I'm Hung Vo `}
          <br />
          {`I'm from DaNang, VietNam. Since 5 years, I'm working as Web Developer
          with software company and I have made a lot of projects, from basic
          HTML pages to complex projects like a React library. I hope to be a
          great developer and get my dream job in the future. Besides coding, I
          also like listening to music and playing video games.`}
        </InfoStyled>
      </div>
    </WhoStyled>
  )
}

export default Who
