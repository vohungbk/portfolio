import React, { FC } from 'react'
import { socialLinks } from '../shared/contants'
import Image from 'next/image'
import {
  BtnSendStyled,
  ContactStyled,
  ContentStyled,
  FormStyled,
  InfoStyled,
  SocialLinksStyled,
  TitleSocialStyled,
  TitleStyled,
} from './styled/Contact.styled'
import { InputStyled } from './styled/Input.styled'

const Contact: FC = () => {
  return (
    <ContactStyled>
      <TitleStyled> Get in touch</TitleStyled>
      <ContentStyled data-scroll data-scroll-speed="1">
        <InfoStyled>
          <div>
            <FormStyled
              onSubmit={(e) => {
                e.preventDefault()
                alert(
                  "Just a fake form. I'm too busy to contact you using email."
                )
              }}
            >
              <label htmlFor="name">Your name</label>
              <InputStyled type="text" id="name" placeholder="John Doe" />
              <label htmlFor="email">Your email</label>
              <InputStyled
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
              />
              <label htmlFor="subject">Subject</label>
              <InputStyled
                type="text"
                id="subject"
                placeholder="I want to talk to you"
              />
              <BtnSendStyled>Send</BtnSendStyled>
            </FormStyled>
          </div>
          <div>
            <TitleSocialStyled>Other places</TitleSocialStyled>
            {socialLinks.map((item) => (
              <SocialLinksStyled
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="w-[30px] h-[30px] rounded-full"
                  src={item.icon}
                  alt=""
                  width={30}
                  height={30}
                />
                <h1>{item.title}</h1>
              </SocialLinksStyled>
            ))}
          </div>
        </InfoStyled>
      </ContentStyled>
    </ContactStyled>
  )
}

export default Contact
