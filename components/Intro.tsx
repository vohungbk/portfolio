import { FC, Fragment, MouseEvent } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Canvas from './Canvas'
import { SVG } from './styled/Svg.styled'
import {
  CtaGroup,
  CtaLink,
  Description,
  Icon,
  IntroStyled,
  ScrollBtn,
  Tagline,
  Title,
  VisuallyHidden,
} from './styled/Intro.styled'
import { characters } from '../shared/contants'
import { m } from 'framer-motion'

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, delay },
})

const Intro: FC = () => {
  const { scroll } = useLocomotiveScroll()

  // Locomotive smooth scroll needs its own scrollTo; fall back to the native anchor
  const goTo = (target: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!scroll) return
    event.preventDefault()
    scroll.scrollTo(target)
  }

  return (
    <IntroStyled>
      <Canvas />
      <SVG
        aria-hidden="true"
        viewBox="0 0 245 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {characters.map((character, index) => (
          <Fragment key={character}>
            <m.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: index / 10, duration: 1 }}
              d={character}
              fill="none"
              stroke="#FFF"
              strokeWidth="3"
            ></m.path>
            <m.path
              initial={{ fill: '#ffffff00' }}
              animate={{ fill: '#ffffff' }}
              transition={{ delay: 0.7 + index / 10, duration: 0.6 }}
              fill="none"
              d={character}
            ></m.path>
          </Fragment>
        ))}
      </SVG>
      <Title {...fadeIn(1.4)}>
        <VisuallyHidden>Hung, </VisuallyHidden>
        Full-Stack Developer
      </Title>
      <Tagline {...fadeIn(1.5)}>
        I build SaaS products end to end, from modern web interfaces to backend
        APIs and payment integrations.
      </Tagline>
      <Description {...fadeIn(1.6)}>
        7+ years of experience building scalable web applications, SaaS
        platforms, and business solutions with modern technologies.
      </Description>
      <CtaGroup {...fadeIn(1.7)}>
        <CtaLink $primary href="#projects" onClick={goTo('#projects')}>
          View My Projects
        </CtaLink>
        <CtaLink href="#contact" onClick={goTo('#contact')}>
          Contact Me
        </CtaLink>
      </CtaGroup>
      <ScrollBtn
        href="#who"
        onClick={goTo('#who')}
        aria-label="Scroll to About"
        {...fadeIn(1.8)}
      >
        <Icon size={56} aria-hidden="true" />
      </ScrollBtn>
    </IntroStyled>
  )
}

export default Intro
