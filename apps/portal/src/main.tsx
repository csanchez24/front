import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';
import App from './app';
import { MantineProvider } from '@mantine/core';

ReactDOM.render(
  <StrictMode>
    <MantineProvider theme={{ fontFamily: 'Inter var' }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
  document.getElementById('root')
);
