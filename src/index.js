import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import { GlobalStyle } from 'styled.index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
