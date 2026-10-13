import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { CONTACT_EMAIL, socialLinks } from '../shared/contants'
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
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const body = `Hi Hung,\n\n${message}\n\n${name}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <ContactStyled id="contact">
      <TitleStyled> Get in touch</TitleStyled>
      <ContentStyled data-scroll data-scroll-speed="1">
        <InfoStyled>
          <div>
            <FormStyled onSubmit={handleSubmit}>
              <label htmlFor="name">Your name</label>
              <InputStyled
                type="text"
                id="name"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="subject">Subject</label>
              <InputStyled
                type="text"
                id="subject"
                placeholder="I want to talk to you"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <label htmlFor="message">Message</label>
              <InputStyled
                as="textarea"
                id="message"
                rows={5}
                placeholder="Tell me about your project"
                required
                value={message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
              />
              <BtnSendStyled type="submit">Send via email</BtnSendStyled>
            </FormStyled>
          </div>
          <div>
            <TitleSocialStyled>Other places</TitleSocialStyled>
            {socialLinks.map(({ title, Icon, link, external }) => (
              <SocialLinksStyled
                key={title}
                href={link}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <Icon size={30} />
                <h1>{title}</h1>
              </SocialLinksStyled>
            ))}
          </div>
        </InfoStyled>
      </ContentStyled>
    </ContactStyled>
  )
}

export default Contact
