import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as MobXProvider } from 'mobx-react';
import { Provider } from 'react-redux';
import axios from 'axios';
import { navigate } from '@reach/router';
import MobxRootStore from './stores';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const mobxRootStore = new MobxRootStore({ api: axios, navigate });

ReactDOM.render(
  <MobXProvider store={mobxRootStore}>
    <Provider store={{}}>
      <App />
    </Provider>
  </MobXProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
