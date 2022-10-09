import '../styles/globals.scss'
import {
  ApolloProvider
} from "@apollo/client";
import client from "../client";
import { useCreateStore, Provider } from '../store/store'

function MyApp( {
  Component, pageProps
}) {
  
  const createStore = useCreateStore(pageProps.initialZustandState)
  return(
    <ApolloProvider client={client}>
    
    <Provider createStore={createStore}>
      <Component {...pageProps} />
      </Provider>
    </ApolloProvider>)
}

export default MyApp