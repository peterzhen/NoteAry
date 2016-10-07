import {
        RECEIVE_NOTES,
        RECEIVE_NOTE,
        REMOVE_NOTE,
        RECEIVE_ERRORS
        } from '../actions/note_actions';

import merge from 'lodash/merge';

const _nullNotes = Object.freeze({
  notes: [],
  errors: []
});

const NotesReducer = (state = _nullNotes, action) => {
  switch(action.type){

    case RECEIVE_NOTES:
      const notes = action.notes;
      return merge({}, _nullNotes, {
        notes
      });

    case RECEIVE_NOTE:
      const newNote = {[action.note.id]: action.note};
      return merge({}, _nullNotes, newNote);

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
