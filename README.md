# Level 1. 第一個 React 元件
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 撰寫第一個元件 - Header
2. 讓 Header 元件顯示在 App 元件中


## 你可以在這階段學習
### ES6
- [Classes](https://babeljs.io/docs/learn-es2015/#classes)
```js
class Header extends React.Component {
  // ...
}
```
- [Modules](https://babeljs.io/docs/learn-es2015/#modules)
```js
// Header.js
export default class Header {}

// App.js
import Header from './Header';
```

### React
- [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)
- [Component Specs: render](https://facebook.github.io/react/docs/component-specs.html#render)
```js
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Hello, React</h1>
      </header>
    );
  }
}
```
