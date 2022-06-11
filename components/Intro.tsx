import { FC, Fragment } from 'react'
import Canvas from './Canvas'
import { SVG } from './styled/Svg.styled'
import { IntroStyled, Paragraphs, ScrollBtn } from './styled/Intro.styled'
import { characters } from '../shared/contants'
import { m } from 'framer-motion'
import { BiChevronsDown } from 'react-icons/bi'

const Intro: FC = () => {
  return (
    <IntroStyled>
      <Canvas />
      <SVG viewBox="0 0 245 97" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <Paragraphs
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        {`I'm a frontend developer`}
      </Paragraphs>
      <ScrollBtn
        href="#who"
        data-scroll-todata-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        <BiChevronsDown style={{ animation: 'bounce 1s infinite' }} size={56} />
      </ScrollBtn>
    </IntroStyled>
  )
}

export default Intro
