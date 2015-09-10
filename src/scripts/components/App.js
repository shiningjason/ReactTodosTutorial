import React from 'react';
import shortid from 'shortid';
import Header from './Header';
import Input from './Input';
import TodoList from './TodoList';
import TodoStore from '../stores/TodoStore';

const _addTodo = (todos, content) => {
  todos.push({
    id: shortid(),
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

const _editTodo = (todos, id, content) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.content = content;
  return todos;
};

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { todos: TodoStore.getAll() };
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

  handleEditTodo(id, content) {
    this.setState({
      todos: _editTodo(this.state.todos, id, content)
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
          onEdit={this.handleEditTodo.bind(this)}
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
