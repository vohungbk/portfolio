import type { NextPage } from 'next'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Who from '../components/Who'

const Home: NextPage = () => {
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Intro />
        <Who />
        <Skills />
      </div>
    </LocomotiveScrollProvider>
  )
}

export default Home
