import {
        RECEIVE_NOTES,
        RECEIVE_NOTE,
        REMOVE_NOTE,
        RECEIVE_ERRORS
        } from '../actions/note_actions';

import merge from 'lodash/merge';

const NotesReducer = (state = {}, action) => {
  switch(action.type){

    case RECEIVE_NOTES:
      return action.notes;

    case RECEIVE_NOTE:
      const newNote = {[action.note.id]: action.note};
      return merge({}, state, newNote);

    case REMOVE_NOTE:
      let newState = Object.assign({}, state);
      delete newState[action.note.id];
      return newState;

    case RECEIVE_ERRORS:
      console.log(action.errors);

    default:
      return state;
  }
};

export default NotesReducer;
