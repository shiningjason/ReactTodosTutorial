import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import createStore from '../utils/createStore';
import createDebugPanel from '../utils/createDebugPanel';

const store = createStore();
const debugPanel = createDebugPanel(store);

export default class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <App />}
        </Provider>
        {debugPanel}
      </div>
    );
  }
}
