import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

import Layout from '../components/layout'

import '@fortawesome/fontawesome-pro/css/fontawesome.min.css'
import '@fortawesome/fontawesome-pro/css/brands.min.css'
import '@fortawesome/fontawesome-pro/css/regular.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
