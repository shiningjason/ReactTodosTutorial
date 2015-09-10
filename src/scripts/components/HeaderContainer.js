import React from 'react';
import Header from './Header';
import TodoStore from '../stores/TodoStore';

const getTodoNumberState = () => ({
  todoNumber: TodoStore.getState().count((todo) => !todo.completed)
});

export default class HeaderContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = getTodoNumberState();
  }

  componentDidMount() {
    this._changeListener = TodoStore.addListener(() => this.setState(getTodoNumberState()));
  }

  componentWillUnmount() {
    this._changeListener.remove();
  }

  render() {
    return (
      <Header {...this.props} todoNumber={this.state.todoNumber} />
    );
  }
}
