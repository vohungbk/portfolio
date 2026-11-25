import type { IconType } from 'react-icons'
export interface allDataType {
  skills: {
    image: string
    title: string
    link: string
  }[]
  projects: {
    id: string
    title: string
    description: string
    demo: string
    github: string
    technologies: string[]
    image: {
      url: string
    }
  }[]
  smallProjects: {
    id: string
    title: string
    description: string
    link: string
    icon: {
      url: string
    }
  }[]
}

export interface ProjectTechnology {
  name: string
  /** Remote icon URL */
  icon?: string
  /** react-icons component, used when there is no icon URL */
  Icon?: IconType
  /** Brand color for the react-icons component */
  color?: string
}

export interface ProjectDemoAccess {
  email: string
  password: string
}

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  demo: string
  github?: string
  demoAccess?: ProjectDemoAccess
  /** Wider screenshot column that keeps the image's native aspect ratio */
  largeMedia?: boolean
  technologies: ProjectTechnology[]
  image: {
    url: string
    alt: string
    width: number
    height: number
  }
}
