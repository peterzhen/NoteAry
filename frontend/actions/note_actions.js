export const REQUEST_NOTES = "REQUEST_NOTES";
export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const REQUEST_NOTE = "REQUEST_NOTE";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const CREATE_NOTE = "CREATE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DESTROY_NOTE = "DESTROY_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const requestNotes = () => ({
  type: REQUEST_NOTES
});

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const requestNote = (id) => ({
  type: REQUEST_NOTE,
  id
});

export const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note
});

export const createNote = note => ({
  type: CREATE_NOTE,
  note
});

export const updateNote = note => ({
  type: UPDATE_NOTE,
  note
});

export const destroyNote = note => ({
  type: DESTROY_NOTE,
  note
});

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
