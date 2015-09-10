import React from 'react';
import shortid from 'shortid';
import Header from './Header';
import Input from './Input';
import TodoList from './TodoList';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { todos: TodoStore.getAll() };
  }

  render() {
    return (
      <div style={styles.container}>
        <Header username="Jason" todoNumber={100} />
        <div style={styles.inputContainer}>
          <Input onSubmitEditing={TodoActions.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          onToggle={TodoActions.toggleTodo}
          onEdit={TodoActions.editTodo}
          onDelete={TodoActions.deleteTodo} />
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
