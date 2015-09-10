# Level 2. 組合元件
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 由上層元件 App 餵參數（username, todoNumber）給下層元件 Header 顯示
2. 定義 Header 要吃的參數型別，與參數初始值


## 你可以在這階段學習
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
