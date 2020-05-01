import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './apollo';
import Routes from './routes';
import './assets/scss/index.scss';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
