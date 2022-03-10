import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';
import App from './app';
import { MantineProvider } from '@mantine/core';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apollo';

ReactDOM.render(
  <StrictMode>
    <MantineProvider theme={{ fontFamily: 'Inter var' }}>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </MantineProvider>
  </StrictMode>,
  document.getElementById('root')
);
