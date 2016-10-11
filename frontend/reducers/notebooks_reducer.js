import {
        RECEIVE_NOTEBOOKS,
        RECEIVE_NOTEBOOK,
        REMOVE_NOTEBOOK,
        RECEIVE_ERRORS,
        RECEIVE_NOTEBOOK_UPDATE,
        SWITCH_NOTEBOOK
      } from '../actions/notebook_actions';

import merge from 'lodash/merge';

const _nullNotebooks = Object.freeze({
  currentNotebook: null,
  notebooks: [],
  errors: []
});

const NotebooksReducer = (state = _nullNotebooks, action) => {
  let newState
  switch(action.type){

    case RECEIVE_NOTEBOOKS:
      const notebooks = action.notebooks;
      return merge({}, _nullNotebooks, {
        notebooks
      });

    case RECEIVE_NOTEBOOK:
      newState = merge({}, state);
      const newNotebook = action.notebook;
      newState.notebooks.unshift(newNotebook);
      return newState;

    case RECEIVE_NOTEBOOK_UPDATE:
      newState = merge({}, state)
      const updatedNotebook = action.notebook;
      state.notebooks.map( (notebook, idx) => {
        if (notebook.id === updatedNotebook.id){
          newState.notebooks[idx] = updatedNotebook;
        }
      });
      return newState;

    case SWITCH_NOTEBOOK:
      newState = merge({}, state);
      newState.currentNotebook = action.notebook;
      return newState;

    case REMOVE_NOTEBOOK:
    return Object.assign(
      {},
      state,
      {notebooks: state.notebooks.filter((notebook) =>
      notebook.id != action.notebook.id)}
    );

    case RECEIVE_ERRORS:
      console.log(action.errors);

    default:
      return state;
  }
};

export default NotebooksReducer;
