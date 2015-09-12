# Level 10. Flux / Controller-View
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 修改 App 元件
  1. 呼叫 TodoAction 來處理使用者操作行為
  2. 傾聽 TodoStore 來修改內部的 state


## 你可以在這階段學習
1. 瞭解如何從 Store 中取得資料
2. 瞭解如何呼叫 Actions 來處理使用者行為
3. 瞭解 Single Source of Truth（單一資料源）的意義

PS. 做完本章節後，請再次思考 flux 的架構圖所有節點的意義 :)
![Flux 架構圖](http://blog.krawaller.se/img/flux-diagram.png)

### Flux
- [Views and Controller-Views](http://facebook.github.io/flux/docs/overview.html#views-and-controller-views)
```js
import TodoStore from '../stores/TodoStore';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { todos: TodoStore.getAll() };
    this.onChange = () => this.setState({ todos: TodoStore.getAll() });
  }

  componentDidMount() {
    // 傾聽 TodoStore 廣播出來的 event，當一聽到 event，
    // 便抓取 TodoStore 的資料來更新元件中的 State
    TodoStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    // 取消傾聽
    TodoStore.removeChangeListener(this.onChange);
  }
}
```
