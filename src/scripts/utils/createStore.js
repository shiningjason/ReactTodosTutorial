import { createStore, combineReducers } from 'redux';
import * as reducers from '../reducers';

let finalCreateStore;

if (__DEVTOOLS__) {
  var { compose } = require('redux');
  var { devTools, persistState } = require('redux-devtools');

  finalCreateStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);

} else {
  finalCreateStore = createStore;
}

export default () => {
  const composedReducer = combineReducers(reducers);
  const store = finalCreateStore(composedReducer);

  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(combineReducers(require('../reducers')))
    );
  }

  return store;
};
