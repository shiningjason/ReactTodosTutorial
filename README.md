# Level 10. Flux / Controller-View
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 修改 App 元件，讓它呼叫 TodoAction 來處理使用者操作行為，並傾聽 TodoStore 來取得資料


## 你可以在這階段學習
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
