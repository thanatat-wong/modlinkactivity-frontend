import '../styles/globals.css'

import type { AppProps } from 'next/app'
import React from "react";
import App from "next/app";
import Head from "next/head";
import Script from "next/script";
import getConfig from "next/config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head><title>Activity Recommendation System</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        </Head>
      <Component {...pageProps} />
    </>
  )
}


export default MyApp
