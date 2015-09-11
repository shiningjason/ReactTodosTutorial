# Level 6. 完成範例
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 使用 React Dev Tools
2. 完成切換待辦事項狀態的功能
3. 完成刪除待辦事項的功能
4. 完成編輯待辦事項的功能


## 你可以在這階段學習
1. 瞭解如何使用 Dev tools
2. 瞭解如何 React 元件的生命週期

### ES6
- [Array.prototype.find()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
```
const array = [1, 2, 3, 4, 5, 6];

cosnt result = array.find((ele) => ele === 1);
console.log(result); // 1
```
- [Array.prototype.findIndex()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
```
const array = [1, 2, 3, 4, 5, 6];

cosnt result = array.findIndex((ele) => ele === 1);
console.log(result); // 0
```
- [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
```
const a = { text: 'a say hello', a: 'a' };
const b = { text: 'b say hello', b: 'b' };

const c = Object.assign({}, a, b);
console.log(c); // { text: 'b say hello', a: 'a', b: 'b' }
```

### React
- [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Component Specs and Lifecycle](https://facebook.github.io/react/docs/component-specs.html)
![Component Lifecycle](https://pbs.twimg.com/media/B-G3_T8CcAAmTHV.jpg:large)
- [The ref String Attribute](https://facebook.github.io/react/docs/more-about-refs.html#the-ref-string-attribute)
```js
class Input extends React.Component {
  componentDidUpdate() {
    const inputNode = React.findDOMNode(this.refs.myInput);
    // ...
  }
  render() {
    return (<input ref="myInput" />);
  }
}
```
- [Transferring Props](https://facebook.github.io/react/docs/transferring-props.html)
```js
<Input {...this.props} more="values" />
```

### 其他
- 使用 [shortid](https://github.com/dylang/shortid) 生成短且唯一的 key
```js
import shortid from 'shortid';

console.log(shortid()); // PPBqWA9
```

