import { EventEmitter } from 'events';
import update from 'react/lib/update';
import shortid from 'shortid';
import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';
const DEFAULT_TODOS = [
  {
    id: shortid(),
    content: '準備 React & Flux 教育訓練',
    completed: false
  },
  {
    id: shortid(),
    content: '繳電話費',
    completed: false
  },
  {
    id: shortid(),
    content: '繳房租',
    completed: false
  },
  {
    id: shortid(),
    content: '週會會議記錄',
    completed: true
  }
];

const _addTodo = (todos, content) => {
  return update(todos, {
    $push: [{
      id: shortid(),
      content,
      completed: false
    }]
  });
};

const _toggleTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  return update(todos, {
    [idx]: {
      completed: { $set: !todos[idx].completed }
    }
  });
};

const _deleteTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  return update(todos, {
    $splice: [[idx, 1]]
  });
};

const _editTodo = (todos, id, content) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  return update(todos, {
    [idx]: {
      content: { $set: content }
    }
  });
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

var _todos = DEFAULT_TODOS;

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
