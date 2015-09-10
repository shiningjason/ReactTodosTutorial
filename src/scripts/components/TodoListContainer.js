import React from 'react';
import { Container } from 'flux/utils';
import TodoList from './TodoList';
import TodoStore from '../stores/TodoStore';
import { toggleTodo, editTodo, deleteTodo } from '../actions/TodoActions';

class TodoListContainer extends React.Component {

  static getStores() {
    return [ TodoStore ];
  }

  static calculateState() {
    return {
      todos: TodoStore.getState()
    };
  }

  render() {
    return (
      <TodoList
        {...this.props}
        todos={this.state.todos}
        onToggle={toggleTodo}
        onEdit={editTodo}
        onDelete={deleteTodo} />
    );
  }
}

export default Container.create(TodoListContainer);
