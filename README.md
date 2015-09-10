# Level 15. Redux / Provider & Store
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 使用 reducers 來建立 store
2. 新增 AppContainer 來 render Porvider 並且注入 store


## 你可以在這階段學習
### Redux
- [Store](https://github.com/rackt/redux/blob/master/docs/basics/Store.md)

> [簡中版文件](https://github.com/camsong/redux-in-chinese/blob/master/docs/basics/Store.md)

```js
import { combineReducers, createStore } from 'redux';
import * as reducers from './reducers';

const composedReducer = combineReducers(reducers);
const store = createStore(composedReducer);
```
- [Injecting Redux Store to React Component](https://github.com/rackt/react-redux#injecting-redux-store)
```js
import { Provider } from 'react-redux';

const store = createStore(reducers);

React.render((
  <Provider store={store}>
    {() => <App />}
  </Provider>
), document.getElementById('main'));
```
