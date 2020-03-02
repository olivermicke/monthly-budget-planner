import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { App } from './app/App';

import * as serviceWorker from './serviceWorker';
import { store } from './store';

import './index.css';

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
