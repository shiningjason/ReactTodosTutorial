# Level 4. 定義樣式在元件中
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 使用 JS 定義所有元件（App, Header, TodoList, TodoItem）的樣式


## 你可以在這階段學習
1. 瞭解如何使用 inline style
2. 瞭解如何使用 Flexbox

### CSS
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### React
- [Inline Styles](https://facebook.github.io/react/tips/inline-styles.html)
```js
class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        Todos App
      </div>
    );
  }
}

const styles = {
  container: {
    // ...
  }
};
```


## 你或許會用到或想看到的東西
### 文章或簡報
- [React: CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js)
- [CSS Modules](http://glenmaddern.com/articles/css-modules)

### 相關資源庫
- [Radium](https://github.com/FormidableLabs/radium)
- [react-style](https://github.com/js-next/react-style)
- [CSS Modules](https://github.com/css-modules/css-modules)
