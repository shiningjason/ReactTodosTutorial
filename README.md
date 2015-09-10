# Level 17. Redux / Connect View
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 修改以下元件（AddTodoInputContainer, HeaderContainer, TodoListContainer），讓它連接到 Redux 的 store


## 你可以在這階段學習
### ES7
1. [Decorators](https://github.com/wycats/javascript-decorators)

### Redux
1. [Connect to redux](https://github.com/rackt/react-redux#quick-start)
```js
@connect((state) => ({ todos: state.todos }))
class App extends React.Component {
  // ...
}
```
