# Level 18. Redux / DevTools
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 加入 Redux DevTools
2. 修改 webpack config 讓 dev mode 才顯示 DevTools，並且 prod mode 不要包進最後的 bundle.js 中


## 你可以在這階段學習
### Webpack / 如何使用 DefinePlugin
```js

// main.js

// 這一段在包成 bundle.js 時會變成，if (false) { ... }
if (__DEVTOOLS__) {
  createDevTools();
}

// webpack.dev.config.js

export default {
  // ...
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
      __DEV__: false,
      __DEVTOOLS__: false
    })
  ]
}
```


### Redux / 如何使用 DevTools
請參考以下三支程式  
1. [utils/createStore.js](https://github.com/shiningjason1989/ReactTodosTutorial/blob/%2318_redux_devtools/src/scripts/utils/createStore.js)  
2. [utils/createDebugPanel.js](https://github.com/shiningjason1989/ReactTodosTutorial/blob/%2318_redux_devtools/src/scripts/utils/createDebugPanel.js)  
3. [components/AppContainer.js](https://github.com/shiningjason1989/ReactTodosTutorial/blob/%2318_redux_devtools/src/scripts/components/AppContainer.js)  
