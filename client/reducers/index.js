import { combineReducers, compose } from 'redux';
import tabReducer from './tab.js';
import mobileReducer from './mobile.js';

const rootReducer = combineReducers({
  tab: tabReducer,
  mobile: mobileReducer
});

const finalCreateStore = compose(
  (window.devToolsExtension)
    ? window.devToolsExtension
    : function (x) { return x; }
);

const store = finalCreateStore(rootReducer, {});

export default rootReducer;