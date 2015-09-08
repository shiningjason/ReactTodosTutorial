import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    const todoItems = todos.map((todo) => (
      <li key={todo.id}>
        <TodoItem content={todo.content} completed={todo.completed} />
      </li>
    ));

    return (
      <ul>
        {todoItems}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
};
