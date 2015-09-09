# Level 3. 動態小孩元件
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 完成 TodoItem 元件
2. 完成 TodoList 元件，該元件可以接收上層傳遞的 todos，並且動態顯示 TodoItem


## 你可以在這階段學習
### JS
1. [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
```js
todos.map(function(todo) {
  return <li>{todo.content}</li>;
});
```

### ES6
1. [Arrows and Lexical This](https://babeljs.io/docs/learn-es2015/#arrows-and-lexical-this)
```js
const sayHello = (name) => name + ' say hello to you!';
```

### React
1. [Dynamic Children](https://facebook.github.io/react/docs/multiple-components.html#dynamic-children)
```js
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {todos.map((todo) => <li key={todo.id}>{todo.content}</li>)}
      </ul>
    );
  }
}
```
