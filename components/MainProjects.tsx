import { BiLinkExternal } from 'react-icons/bi'
import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../shared/contants'
import {
  CoverImageStyled,
  ImageStyled,
  ItemInfoStyled,
  MainProjectsStyled,
  TechImageStyled,
  Title,
} from './styled/MainProjects.styled'

const MainProjects: FC = () => {
  return (
    <>
      <Title>Selected projects</Title>
      {projects.map((project, index) => (
        <MainProjectsStyled
          key={project.id}
          layout={index % 2 === 1 ? 'row' : 'row-reverse'}
        >
          <CoverImageStyled data-scroll data-scroll-speed="3">
            <div>
              <div className="border-black border-[8px]">
                <ImageStyled src={project.image.url} alt="Cover image" />
              </div>
            </div>
          </CoverImageStyled>
          <ItemInfoStyled>
            <h1>{project.title}</h1>
            <p className="text-[20px] text-justify my-3">
              {project.description}
            </p>
            <div>
              {project.technologies.map((tech) => (
                <TechImageStyled
                  key={tech}
                  src={tech}
                  alt="Tech"
                  width={30}
                  height={30}
                />
              ))}
            </div>
            <div>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <BiLinkExternal size={25} />
                <span> Live Demo</span>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} />
                <span> View Github</span>
              </a>
            </div>
          </ItemInfoStyled>
        </MainProjectsStyled>
      ))}
    </>
  )
}

export default MainProjects
