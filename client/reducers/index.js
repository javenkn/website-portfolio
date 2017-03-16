import { combineReducers, compose } from 'redux';
import tabReducer from './tab.js';

const rootReducer = combineReducers({
  tab: tabReducer
});

const finalCreateStore = compose(
  (window.devToolsExtension)
    ? window.devToolsExtension
    : function (x) { return x; }
);

const store = finalCreateStore(rootReducer, {});

export default store;