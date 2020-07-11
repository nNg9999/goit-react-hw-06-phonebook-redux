import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './modules/store';

import './sass/base.scss';

import App from './components/AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));