
import fetch from 'node-fetch';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

let uri = '';

if (process.env.NODE_ENV === 'development') {
  uri = 'http://localhost:2800/graphql';
} else if (process.env.NODE_ENV === 'production') {
  uri = 'https://daniel-yipah-backend.herokuapp.com/graphql';
} else {
  uri = 'https://daniel-yipah-backend.herokuapp.com/graphql';
}

const client = new ApolloClient({
  link: createHttpLink({uri, fetch}),
  cache: new InMemoryCache(),
});

export default client;
