import React from 'react'
import { skillAreas } from '../shared/contants'
import {
  AreaStyled,
  DescriptionStyled,
  GridStyled,
  SkillStyled,
  TitleStyled,
} from './styled/Skills.styled'

const Skills = () => {
  return (
    <SkillStyled aria-labelledby="skills-heading">
      <TitleStyled
        id="skills-heading"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
      >
        {`My Skills & Knowledge`}
      </TitleStyled>
      <DescriptionStyled
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
      >
        Areas of expertise and engineering capabilities.
      </DescriptionStyled>

      <GridStyled>
        {skillAreas.map((area) => (
          <AreaStyled key={area.id} aria-labelledby={`skills-${area.id}`}>
            <h3 id={`skills-${area.id}`}>{area.title}</h3>
            <p>{area.description}</p>
            <ul>
              {area.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </AreaStyled>
        ))}
      </GridStyled>
    </SkillStyled>
  )
}

export default Skills
