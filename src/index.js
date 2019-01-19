import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import theme from './common/theme';

import App from 'components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider {...{ theme }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
