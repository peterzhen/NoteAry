import {
        getNotebooks,
        getNotebook,
        createNotebook,
        updateNotebook,
        destroyNotebook
      } from '../util/notebook_api_util.js'

import {
        requestNotebooks,
        requestNotebook,
        receiveNotebooks,
        receiveNotebook,
        removeNotebook,
        receiveErrors,
        REQUEST_NOTEBOOKS,
        REQUEST_NOTEBOOK,
        CREATE_NOTEBOOK,
        UPDATE_NOTEBOOK,
        DESTROY_NOTEBOOK
      } from '../actions/notebook_actions.js'


export default ({getState, dispatch}) => next => action => {
  const notebooksSuccess = notes => dispatch(receiveNotebooks(notes));
  const notebookSuccess = note => dispatch(receiveNotebook(note));
  const notebookRemoved = note => dispatch(removeNotebook(note));
  const notebookError = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type) {
    case REQUEST_NOTEBOOKS:
      getNotebooks(notebooksSuccess, notebookError);
      break;
    case REQUEST_NOTEBOOK:
      getNotebook(notebooksSuccess, notebookError);
      break;
    case CREATE_NOTEBOOK:
      createNotebook(action.notebook, notebookSuccess, notebookError);
      break;
    case UPDATE_NOTEBOOK:
      updateNotebook(action.notebook, notebookSuccess, notebookError);
      break;
    case DESTROY_NOTEBOOK:
      destroyNotebook(action.notebook, notebookRemoved, notebookError);
      break;
    default:
      next(action);
  }
}
