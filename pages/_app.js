import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'
import * as React from 'react';


export default function MyApp(props) {
  const { Component, pageProps :{session , ...pageProps} } = props;

  return (

    <SessionProvider session={session} >
        <Component {...pageProps} />
    </SessionProvider>
        
  );
}
 
