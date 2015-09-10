import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';

export const addTodo = (content) => {
  AppDispatcher.dispatch({
    type: ActionTypes.ADD_TODO,
    content
  });
};

export const editTodo = (id, content) => {
  AppDispatcher.dispatch({
    type: ActionTypes.EDIT_TODO,
    id,
    content
  });
};

export const toggleTodo = (id) => {
  AppDispatcher.dispatch({
    type: ActionTypes.TOGGLE_TODO,
    id
  });
};

export const deleteTodo = (id) => {
  AppDispatcher.dispatch({
    type: ActionTypes.DELETE_TODO,
    id
  });
};
