import {
  ApolloClient,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3333/graphql',
  headers: {
    authorization: 'Bearer ' + localStorage.getItem('auth'),
  },
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  ssrMode: false,
  link: from([httpLink]),
  cache,
});
