import React from 'react';
import { Container } from 'flux/utils';
import Header from './Header';
import TodoStore from '../stores/TodoStore';

class HeaderContainer extends React.Component {

  static getStores() {
    return [ TodoStore ];
  }

  static calculateState() {
    return {
      todoNumber: TodoStore.getState().count((todo) => !todo.completed)
    }
  }

  render() {
    return (
      <Header {...this.props} todoNumber={this.state.todoNumber} />
    );
  }
}

export default Container.create(HeaderContainer);
