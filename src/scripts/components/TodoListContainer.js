import React from 'react';
import TodoList from './TodoList';
import TodoStore from '../stores/TodoStore';
import { toggleTodo, editTodo, deleteTodo } from '../actions/TodoActions';

const getTodoState = () => ({ todos: TodoStore.getState() });

export default class TodoListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = getTodoState();
  }

  componentDidMount() {
    this._changeListener = TodoStore.addListener(() => this.setState(getTodoState()));
  }

  componentWillUnmount() {
    this._changeListener.remove();
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
