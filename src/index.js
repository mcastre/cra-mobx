import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import axios from 'axios';
import { navigate } from '@reach/router';
import MobxRootStore from './stores';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const mobxRootStore = new MobxRootStore({ api: axios, navigate });

ReactDOM.render(
  <Provider store={mobxRootStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
