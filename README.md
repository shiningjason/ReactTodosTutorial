# Level 9. Flux / Stores
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 新增 TodoStore
  1. 繼承 EventEmitter 的實例
  2. 建立 addListener 和 removeListener 等便利的方法
  3. 將待辦事項存放在該 store 中，並提供一個 getAll 的方法給外部
  4. 根據 action type 處理業務邏輯，並修改待辦事項的值
  5. 將 TodoStore 註冊到 AppDispatcher 中


## 你可以在這階段學習
1. 瞭解為什麼要註冊 Store 到 Dispatcher 中
2. 瞭解為什麼要使用到 EventEmitter 的方法
3. 瞭解 Store 在 flux 中扮演的角色

### Flux
- [Creating Store](http://facebook.github.io/flux/docs/todo-list.html#creating-stores)
- [Best practices | Store](http://facebook.github.io/flux/docs/flux-utils.html#stores)
