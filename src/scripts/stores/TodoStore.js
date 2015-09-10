import { EventEmitter } from 'events';
import update from 'react/lib/update';
import Immutable from 'immutable';
import shortid from 'shortid';
import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';

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

const TodoStore = {
  ...EventEmitter.prototype,

  getAll() {
    return _todos;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
};

var _todos = Immutable.List(DEFAULT_TODOS);

AppDispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      _todos = _addTodo(_todos, action.content);
      TodoStore.emitChange();
      break;

    case ActionTypes.EDIT_TODO:
      _todos = _editTodo(_todos, action.id, action.content);
      TodoStore.emitChange();
      break;

    case ActionTypes.TOGGLE_TODO:
      _todos = _toggleTodo(_todos, action.id);
      TodoStore.emitChange();
      break;

    case ActionTypes.DELETE_TODO:
      _todos = _deleteTodo(_todos, action.id);
      TodoStore.emitChange();
      break;
  }
});

export default TodoStore;
