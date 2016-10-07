import {
        RECEIVE_NOTEBOOKS,
        RECEIVE_NOTEBOOK,
        REMOVE_NOTEBOOK,
        RECEIVE_ERRORS
      } from '../actions/notebook_actions';

import merge from 'lodash/merge';

const _nullNotebooks = Object.freeze({
  notebooks: [],
  errors: []
});

const NotebooksReducer = (state = _nullNotebooks, action) => {
  switch(action.type){

    case RECEIVE_NOTEBOOKS:
      const notebooks = action.notebooks;
      return merge({}, _nullNotebooks, {
        notebooks
      });

    case RECEIVE_NOTEBOOK:
      const newNote = {[action.notebook.id]: action.notebook};
      return merge({}, state, newNote);

    case REMOVE_NOTEBOOK:
      let newState = Object.assign({}, state);
      delete newState[action.notebook.id];
      return newState;

    case RECEIVE_ERRORS:
      console.log(action.errors);

    default:
      return state;
  }
};

export default NotebooksReducer;
