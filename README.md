# Level 5. 控制元件
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 新增 Input 元件，讓使用者可以登打新的待辦事項
2. 在 App 元件中，使用 State 來儲存待辦事項
3. 在 App 元件中，加入處理新增待辦事項的邏輯，並加入新的待辦事項至 State


## 你可以在這階段學習
1. 瞭解使用控制元件，是為了要傾聽使用者的輸入事件，和將輸入的值存回 State 後再重新顯示
2. 瞭解元件中的 State 功用和寫法
3. 瞭解 Props 和 State 的差別和使用時機，應該盡可能的寫 stateless 的元件

### JS
- [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

### ES6
- [Enhanced Object Literals](https://babeljs.io/docs/learn-es2015/#enhanced-object-literals)
```js
const content = 'hello';

const todo = {
  id: 1,
  content, // 這是 `content: content` 的簡寫
  completed: false
};
```

### React
- [Components are Just State Machines](https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html#components-are-just-state-machines)
- [Controlled Components](https://facebook.github.io/react/docs/forms.html#controlled-components)
```js
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleChange(evt) {
    this.setState({ value: evt.target.value });
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange.bind(this)} />
    );
  }
}
```

