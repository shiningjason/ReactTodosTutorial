# Level 2. 組合元件
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 讓 Header 顯示由 App 傳來的 props（username: 使用者名稱, todoNumber: 待辦事項數量）
2. 定義 Header 的「propTypes」與「defaultProps」


## 你可以在這階段學習
1. 瞭解如何將參數透過 props 的手法，由上層元件餵給下層元件
2. 瞭解元件是可以層層包覆的
3. 瞭解如何使用 propTypes 定義元件要吃的 props 型別，用來確保開發時正確的使用底層元件
4. 瞭解如何設定 defaultProps

### ES6
- [Const](https://babeljs.io/docs/learn-es2015/#let-const)
```js
const content = 'hello, es6';
```
- [Destructuring](https://babeljs.io/docs/learn-es2015/#destructuring)
```js
// es6
const { username, todoNumber } = this.props;

// es5
var username = this.props.username;
var todoNumber = this.props.todoNumber;
```

### React
- [Prop Validation](https://facebook.github.io/react/docs/reusable-components.html#prop-validation)
- [Default Prop Values](https://facebook.github.io/react/docs/reusable-components.html#default-prop-values)
```js
class Header extends React.Component {
  // ...
}

Header.propTypes = {
  username: React.PropTypes.string
};

Header.defaultProps = {
  username: 'Jason'
};
```
