import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LazyMotion, domAnimation } from 'framer-motion'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { useEffect } from 'react'

import '../styles/globals.css'
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Component {...pageProps} />
      </LazyMotion>
    </>
  )
}

export default MyApp
