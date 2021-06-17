import React from 'react'
import '../styles/globals.scss'

import 'swiper/swiper.scss';

/* eslint react/jsx-props-no-spreading: "off", curly: "error" */
/* eslint react/prop-types: "off", curly: "error" */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
