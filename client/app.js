import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tabReducer from './reducers/tab.js';
import App from './container/App.jsx';
require('./sass/index.scss');

let store = createStore(tabReducer);

ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);