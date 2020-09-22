import { ApolloClient,InMemoryCache,HttpLink } from '@apollo/client';

export const getClient = (req = null)=>{

  const a = typeof window !== 'undefined' ? localStorage.getItem("token"):null

  const client = new ApolloClient({
    cache:new InMemoryCache(),
    link: new HttpLink({
      headers:{
        authorization:a,
      },    
      uri:'http://localhost:5000'}),
    ssrMode:true,
    name: 'credicity-web-client',
    version: '1.0',
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
    onError: ({ networkError, graphQLErrors }) => {
      console.log('graphQLErrors', graphQLErrors)
      console.log('networkError', networkError)
    }
  })

  return client
}

  

