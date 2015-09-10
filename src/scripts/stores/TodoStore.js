import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';
import shortid from 'shortid';
import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';

const TodoRecord = Immutable.Record({
  id: undefined,
  content: undefined,
  completed: false
});

const createTodoRecord = (todo) => new TodoRecord({
  id: shortid(),
  content: todo.content,
  completed: todo.completed || false
});

const DEFAULT_TODOS = [
  { content: '準備 React & Flux 教育訓練' },
  { content: '繳電話費' },
  { content: '繳房租' },
  { content: '週會會議記錄', completed: true }
].map(createTodoRecord);

const _addTodo = (todos, content) => {
  return todos.push(createTodoRecord({ content }));
};

const _toggleTodo = (todos, id) => {
  return todos.update(
    todos.findIndex((todo) => todo.id === id),
    (todo) => todo.set('completed', !todo.completed))
};

const _deleteTodo = (todos, id) => {
  return todos.delete(todos.findIndex((todo) => todo.id === id));
};

const _editTodo = (todos, id, content) => {
  return todos.update(
    todos.findIndex((todo) => todo.id === id),
    (todo) => todo.set('content', content))
};

class TodoStore extends ReduceStore {

  getInitialState() {
    return Immutable.List(DEFAULT_TODOS);
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.ADD_TODO:
        return _addTodo(state, action.content);
 
      case ActionTypes.EDIT_TODO:
        return _editTodo(state, action.id, action.content);

      case ActionTypes.TOGGLE_TODO:
        return _toggleTodo(state, action.id);

      case ActionTypes.DELETE_TODO:
        return _deleteTodo(state, action.id);
    }
  }
}

export default new TodoStore(AppDispatcher);
