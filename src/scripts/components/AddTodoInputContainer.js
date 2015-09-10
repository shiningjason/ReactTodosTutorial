import React from 'react';
import Input from './Input';
import { addTodo } from '../actions/TodoActions';

export default class AddTodoInputContainer extends React.Component {
  render() {
    return (
      <Input {...this.props} onSubmitEditing={addTodo} />
    );
  }
}
