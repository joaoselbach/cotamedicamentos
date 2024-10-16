import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.cotamedicamentos.com.br/api/graphql',
  cache: new InMemoryCache(),
});

export default client;