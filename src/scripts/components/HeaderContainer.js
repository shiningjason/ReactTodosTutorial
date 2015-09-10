import React from 'react';
import Header from './Header';
import TodoStore from '../stores/TodoStore';

export default class HeaderContainer extends React.Component {

  constructor(props) {
    super(props);

    const getTodoNumberState = () => ({
      todoNumber: TodoStore.getAll().count((todo) => !todo.completed)
    });

    this.state = getTodoNumberState();
    this.onChange = () => this.setState(getTodoNumberState());
  }

  componentDidMount() {
    TodoStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <Header {...this.props} todoNumber={this.state.todoNumber} />
    );
  }
}
