import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rms-backend-fhz5.onrender.com/graphql',
  cache: new InMemoryCache(),
});

export default client;

export * from "./api";