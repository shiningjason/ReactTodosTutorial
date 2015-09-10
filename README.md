# Level 16. Redux / Actions
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 修改原本的 TodoAction，讓每一個方法只回傳 action object，而不再呼叫 AppDispatcher。


## 你可以在這階段學習
### Redux
- [Action](https://github.com/rackt/redux/blob/master/docs/basics/Actions.md)

> [簡中版文件](https://github.com/camsong/redux-in-chinese/blob/master/docs/basics/Actions.md)

```js
export const addTodo = (content) => ({
  type: ADD_TODO,
  content
});
```


## 你或許還會想看
- [Async Actions](https://github.com/rackt/redux/blob/master/docs/advanced/AsyncActions.md)
