import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LazyMotion, domAnimation } from 'framer-motion'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { useEffect } from 'react'

import '../styles/globals.css'
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import { useRouter } from 'next/router'

const TITLE = 'Hung Vo | Full-Stack Developer (Next.js, NestJS, SaaS)'
const DESCRIPTION =
  'Hung Vo is a Full-Stack Developer based in Da Nang, Vietnam. I build SaaS products end to end, from Next.js interfaces to NestJS APIs and payments.'

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
        <title>{TITLE}</title>
        <meta name="title" content={TITLE} />
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="/images/avatar.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={TITLE} />
        <meta property="twitter:description" content={DESCRIPTION} />
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
