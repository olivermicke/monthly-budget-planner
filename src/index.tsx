import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './app/App';

import { unregister } from './serviceWorker';
import { persistor, store } from './store';

import './index.css';

ReactDOM.render(
  <StrictMode>
    <HashRouter basename='/'>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ReduxProvider>
    </HashRouter>
  </StrictMode>,
  document.getElementById('root'),
);

unregister();
