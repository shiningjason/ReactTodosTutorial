import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    const todoItems = todos.map((todo) => (
      <li key={todo.id} style={styles.todoItem}>
        <TodoItem content={todo.content} completed={todo.completed} />
      </li>
    ));

    return (
      <ul style={styles.todoList}>
        {todoItems}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired
};

const styles = {
  todoList: {
    padding: 0,
    listStyle: 'none',
    borderTop: '1px solid rgba(0,0,0,0.12)'
  },
  todoItem: {
    paddingTop: 8,
    paddingBottom: 8,
    borderBottom: '1px solid rgba(0,0,0,0.12)'
  }
};
