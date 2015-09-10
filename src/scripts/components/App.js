import React from 'react';
import shortid from 'shortid';
import HeaderContainer from './HeaderContainer';
import Input from './Input';
import TodoList from './TodoList';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

export default class App extends React.Component {

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
      <div style={styles.container}>
        <HeaderContainer username="Jason" />
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
