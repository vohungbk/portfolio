import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LazyMotion, domAnimation } from 'framer-motion'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`HungVo's Portfolio`}</title>
        <meta name="title" content="HungVo's Portfolio" />
        <meta name="description" content="HungVo's Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="HungVo's Portfolio" />
        <meta property="og:description" content="HungVo's Portfolio" />
        <meta property="og:image" content="/images/avatar.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="HungVo's Portfolio" />
        <meta property="twitter:description" content="HungVo's Portfolio" />
        <meta property="twitter:image" content="/images/avatar.png" />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  )
}

export default MyApp
