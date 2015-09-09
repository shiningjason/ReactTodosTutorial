# Level 4. 定義樣式在元件中
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 使用 JS 定義 App 的元件樣式，讓 App 能夠置中
2. 完成 Header 元件的樣式定義，讓它稍微美一點
3. 完成 TodoList 元件的樣式定義，讓它稍微美一點
4. 完成 TodoItem 元件的樣式定義，讓它稍微美一點


## 你可以在這階段學習
### CSS
1. [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### React
1. [Inline Styles](https://facebook.github.io/react/tips/inline-styles.html)
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
1. [Radium](https://github.com/FormidableLabs/radium)
2. [react-style](https://github.com/js-next/react-style)
3. [CSS Modules](https://github.com/css-modules/css-modules)
4. [關於 CSS Modules 的文章](http://glenmaddern.com/articles/css-modules)

