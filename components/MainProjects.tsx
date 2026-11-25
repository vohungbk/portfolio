import Image from 'next/image'
import { FC } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../shared/contants'
import DemoAccess from './DemoAccess'
import {
  ActionsStyled,
  DescriptionStyled,
  FeaturesStyled,
  InfoStyled,
  MainProjectsStyled,
  MediaStyled,
  ProjectStyled,
  TaglineStyled,
  TechItemStyled,
  TechListStyled,
  Title,
} from './styled/MainProjects.styled'

const MainProjects: FC = () => {
  return (
    <MainProjectsStyled id="projects" aria-labelledby="projects-heading">
      <Title id="projects-heading">Selected projects</Title>
      {projects.map((project, index) => (
        <ProjectStyled
          key={project.id}
          $reversed={index % 2 === 1}
          $largeMedia={project.largeMedia}
          aria-labelledby={`project-${project.id}`}
        >
          <InfoStyled>
            <h3 id={`project-${project.id}`}>{project.name}</h3>
            <TaglineStyled>{project.tagline}</TaglineStyled>
            <DescriptionStyled>{project.description}</DescriptionStyled>
            <FeaturesStyled aria-label={`${project.name} key features`}>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </FeaturesStyled>
            <TechListStyled aria-label={`${project.name} technology stack`}>
              {project.technologies.map((tech) => (
                <TechItemStyled key={tech.name}>
                  {tech.icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={tech.icon}
                      alt=""
                      width={20}
                      height={20}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  {tech.Icon && (
                    <tech.Icon
                      size={20}
                      color={tech.color}
                      aria-hidden="true"
                    />
                  )}
                  {tech.name}
                </TechItemStyled>
              ))}
            </TechListStyled>
            {project.demoAccess && <DemoAccess access={project.demoAccess} />}
            <ActionsStyled>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo: ${project.name} (opens in a new tab)`}
              >
                <BiLinkExternal size={22} aria-hidden="true" />
                <span>Live Demo</span>
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View GitHub: ${project.name} source code (opens in a new tab)`}
                >
                  <FaGithub size={22} aria-hidden="true" />
                  <span>View GitHub</span>
                </a>
              )}
            </ActionsStyled>
          </InfoStyled>
          <MediaStyled $largeMedia={project.largeMedia}>
            <Image
              src={project.image.url}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 1024px) 48vw, 90vw"
            />
          </MediaStyled>
        </ProjectStyled>
      ))}
    </MainProjectsStyled>
  )
}

export default MainProjects
