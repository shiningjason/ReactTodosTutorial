import React from 'react';
import TodoList from './TodoList';
import TodoStore from '../stores/TodoStore';
import { toggleTodo, editTodo, deleteTodo } from '../actions/TodoActions';

export default class TodoListContainer extends React.Component {

  constructor(props) {
    super(props);

    const getTodoState = () => ({ todos: TodoStore.getAll() });

    this.state = getTodoState();
    this.onChange = () => this.setState(getTodoState());
  }

  componentDidMount() {
    TodoStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this.onChange);
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
