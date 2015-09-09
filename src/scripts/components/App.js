import React from 'react';
import Header from './Header';
import Input from './Input';
import TodoList from './TodoList';

const DEFAULT_TODOS = [
  {
    id: 1,
    content: '準備 React & Flux 教育訓練',
    completed: false
  },
  {
    id: 2,
    content: '繳電話費',
    completed: false
  },
  {
    id: 3,
    content: '繳房租',
    completed: false
  },
  {
    id: 4,
    content: '週會會議記錄',
    completed: true
  }
];

export default class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Header username="Jason" todoNumber={100} />
        <div style={styles.inputContainer}>
          <Input />
        </div>
        <TodoList todos={DEFAULT_TODOS} />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 550,
    margin: '0 auto'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 8
  }
};
