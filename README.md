# Level 0. 初始化 React/Flux 專案
這是 React 系列教學中的簡易範例 TodosApp


## 安裝環境
### 1. 下載 nodejs
您可以直接在 [nodejs 官網](https://nodejs.org) 中下載。

> 備註：如果您是進階的開發者，可以考慮使用 [nvm](https://github.com/creationix/nvm) 下載 nodejs；或者如果您使用的是 Mac，可以考慮使用 [Homebrew](http://brew.sh/) 下載 nvm 或者 nodejs。

### 2. 下載 generator-rf
使用下方指令安裝 [Yeoman](http://yeoman.io/) 和 [generator-rf](https://github.com/taiansu/generator-rf)。

> 備註：generator-rf 可以用來初始化一個 React/Flux 專案，而 generator-rf 依賴 Yeoman，因此需安裝兩者。

```
npm install -g yo generator-rf
```


## 初始化專案
```
yo rf ReactTodosApp
```


## 運行專案
```
cd ReactTodosApp && npm run dev
```
然後，開啟 http://localhost:8080 看看結果吧！
