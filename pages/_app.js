import React,{createContext} from 'react'
import App from 'next/app'
import 'materialize-css/dist/css/materialize.min.css'
import {ApolloProvider} from '@apollo/client'
import {getClient} from '../graphql/client'
import 'react-toastify/dist/ReactToastify.css'


function MyApp({ Component, pageProps }) {




  return <ApolloProvider client={getClient()}><Component {...pageProps} /></ApolloProvider>
}

 MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}

export default MyApp