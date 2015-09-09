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

const _addTodo = (todos, content) => {
  todos.push({
    id: todos.length + 1,
    content,
    completed: false
  });
  return todos;
};

const _toggleTodo = (todos, id) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  return todos;
};

const _deleteTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  todos.splice(idx, 1);
  return todos;
};

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { todos: DEFAULT_TODOS };
  }

  handleAddTodo(content) {
    this.setState({
      todos: _addTodo(this.state.todos, content)
    });
  }

  handleToggleTodo(id) {
    this.setState({
      todos: _toggleTodo(this.state.todos, id)
    });
  }

  handleDeleteTodo(id) {
    this.setState({
      todos: _deleteTodo(this.state.todos, id)
    });
  }

  render() {
    return (
      <div style={styles.container}>
        <Header username="Jason" todoNumber={100} />
        <div style={styles.inputContainer}>
          <Input onSubmitEditing={this.handleAddTodo.bind(this)} />
        </div>
        <TodoList
          todos={this.state.todos}
          onToggle={this.handleToggleTodo.bind(this)}
          onDelete={this.handleDeleteTodo.bind(this)} />
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
