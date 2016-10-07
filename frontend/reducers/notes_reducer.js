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
      return merge({}, state, {
        notes
      });

    case RECEIVE_NOTE:
      let newState = merge({}, state);
      const newNote = action.note;
      newState.notes.unshift(newNote);
      return newState;

    case REMOVE_NOTE:
      return Object.assign(
        {},
        state,
        {notes: state.notes.filter((note) => note.id != action.note.id)}
      );

    case RECEIVE_ERRORS:
      console.log(action.errors);

    default:
      return state;
  }
};

export default NotesReducer;
