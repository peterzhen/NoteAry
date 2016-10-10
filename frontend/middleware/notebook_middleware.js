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
        receiveNotebookUpdate,
        removeNotebook,
        receiveErrors,
        REQUEST_NOTEBOOKS,
        REQUEST_NOTEBOOK,
        CREATE_NOTEBOOK,
        UPDATE_NOTEBOOK,
        DESTROY_NOTEBOOK
      } from '../actions/notebook_actions.js'


export default ({getState, dispatch}) => next => action => {
  const notebooksSuccess = notebooks => dispatch(receiveNotebooks(notebooks));
  const notebookSuccess = notebook => dispatch(receiveNotebook(notebook));
  const updateSuccess = notebook => dispatch(receiveNotebookUpdate(notebook));
  const notebookRemoved = notebook => dispatch(removeNotebook(notebook));
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
      updateNotebook(action.notebook, updateSuccess, notebookError);
      break;
    case DESTROY_NOTEBOOK:
      destroyNotebook(action.notebook, notebookRemoved, notebookError);
      break;
    default:
      next(action);
  }
}
