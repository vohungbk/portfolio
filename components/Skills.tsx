import React from 'react'
import { skills } from '../shared/contants'
import {
  DescriptionStyled,
  ImageStyled,
  LinkStyled,
  ListStyled,
  SkillStyled,
  TitleSkillStyled,
  TitleStyled,
} from './styled/Skills.styled'

const Skills = () => {
  return (
    <SkillStyled>
      <TitleStyled
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
      >
        {`My skills & Knowledge`}
      </TitleStyled>
      <DescriptionStyled
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
      >
        Technologies and languages that I use to make my product everyday
      </DescriptionStyled>

      <ListStyled>
        {skills.map((skill) => (
          <LinkStyled
            key={skill.link}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageStyled src={skill.image} alt="Image skill"></ImageStyled>
            <TitleSkillStyled>{skill.title}</TitleSkillStyled>
          </LinkStyled>
        ))}
      </ListStyled>
    </SkillStyled>
  )
}

export default Skills
