import {
        RECEIVE_NOTES,
        RECEIVE_NOTE,
        REMOVE_NOTE,
        RECEIVE_ERRORS,
        RECEIVE_NOTE_UPDATE,
        SWITCH_NOTE
        } from '../actions/note_actions';

import merge from 'lodash/merge';

const _nullNotes = Object.freeze({
  currentNote: null,
  notes: [],
  errors: []
});

const NotesReducer = (state = _nullNotes, action) => {
  let newState;
  switch(action.type){

    case RECEIVE_NOTES:
      const notes = action.notes;
      return merge({}, state, {
        notes
      });

    case RECEIVE_NOTE:
      newState = merge({}, state);
      const newNote = action.note;
      newState.notes.unshift(newNote);
      return newState;

    case RECEIVE_NOTE_UPDATE:
      newState = merge({}, state)
      const updatedNote = action.note;
      state.notes.map( (note, idx) => {
        if (note.id == updatedNote.id){
          newState.notes[idx] = action.note;
        }
      });
      return newState;

    case SWITCH_NOTE:
      newState = merge({}, state);
      newState.currentNote = action.note;
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
