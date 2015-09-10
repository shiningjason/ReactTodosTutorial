# Level 11. Container Pattern
這是 React 系列教學中的簡易範例 TodosApp


## 本階段目標
1. 新增 HeaderContainer，該元件主要工作為：
    1. 傾聽 TodoStore 的 change 事件
    2. 抓取最新的 todos 資料
    3. 計算 todos 中尚未完成的數量
    4. 存回元件的 state 中
    5. render Header 元件並傳遞尚未完成的待辦事項數量給它
2. 新增 AddTodoInputContainer，該元件主要工作為：
    1. render Input 元件
    2. 抓取 Input 的 onSubmitEditing event，並呼叫 addTodo actions
3. 新增 TodoListContainer，該元件主要工作為：
    1. 傾聽 TodoStore 的 change 事件
    2. 抓取最新的 todos 資料，存回 state 中
    3. 將資料與相關 actions 傳遞給 TodoList
4. 修改 App 元件，讓它 render 上面完成的 Container 元件


## 你可以在這階段學習
### Flux
- [Best practices | Containers](http://facebook.github.io/flux/docs/flux-utils.html#containers)
