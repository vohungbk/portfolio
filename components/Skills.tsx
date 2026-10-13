import React from 'react'
import { skillGroups } from '../shared/contants'
import {
  DescriptionStyled,
  GroupStyled,
  GroupTitleStyled,
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
        Technologies I use to design, build and ship full-stack products
      </DescriptionStyled>

      {skillGroups.map((group) => (
        <GroupStyled key={group.title}>
          <GroupTitleStyled>{group.title}</GroupTitleStyled>
          <ListStyled>
            {group.skills.map((skill) => (
              <LinkStyled
                key={skill.link}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImageStyled src={skill.image} alt={skill.title}></ImageStyled>
                <TitleSkillStyled>{skill.title}</TitleSkillStyled>
              </LinkStyled>
            ))}
          </ListStyled>
        </GroupStyled>
      ))}
    </SkillStyled>
  )
}

export default Skills
