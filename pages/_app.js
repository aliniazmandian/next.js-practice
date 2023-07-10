import '../styles/globals.css'
import * as React from 'react';


export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
        <Component {...pageProps} />
  );
}
 
