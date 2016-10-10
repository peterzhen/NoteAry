export const REQUEST_NOTEBOOKS = "REQUEST_NOTEBOOKS";
export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const REQUEST_NOTEBOOK = "REQUEST_NOTEBOOK";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const SWITCH_NOTEBOOK = "SWITCH_NOTEBOOK";
export const CREATE_NOTEBOOK = "CREATE_NOTEBOOK";
export const RECEIVE_NOTEBOOK_UPDATE = "RECEIVE_NOTEBOOK_UPDATE";
export const UPDATE_NOTEBOOK = "UPDATE_NOTEBOOK";
export const DESTROY_NOTEBOOK = "DESTROY_NOTEBOOK";
export const REMOVE_NOTEBOOK = "REMOVE_NOTEBOOK";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const requestNotebooks = () => ({
  type: REQUEST_NOTEBOOKS
});

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
});

export const requestNotebook = (id) => ({
  type: REQUEST_NOTEBOOK,
  id
});

export const receiveNotebook = (notebook) => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const switchNotebook = notebook => ({
  type: SWITCH_NOTEBOOK,
  notebook
});

export const createNotebook = notebook => ({
  type: CREATE_NOTEBOOK,
  notebook
});

export const receiveNotebookUpdate = notebook => ({
  type: RECEIVE_NOTEBOOK_UPDATE,
  notebook
});

export const updateNotebook = notebook => ({
  type: UPDATE_NOTEBOOK,
  notebook
});

export const destroyNotebook = (notebook) => ({
  type: DESTROY_NOTEBOOK,
  notebook
});

export const removeNotebook = notebook => ({
  type: REMOVE_NOTEBOOK,
  notebook
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
