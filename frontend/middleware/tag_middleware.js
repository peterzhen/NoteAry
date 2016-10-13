import {
        getTags,
        getNotesTags
      } from '../util/tag_api_util.js'

import {
        receiveTags,
        receiveNotesTags,
        receiveErrors,
        REQUEST_TAGS,
        REQUEST_NOTES_TAGS
      } from '../actions/tag_actions.js'

export default ({getState, dispatch}) => next => action => {
  const tagsSuccess = tags => dispatch(receiveTags(tags));

  const notesTagsSuccess = tags => {
    dispatch(receiveNotesTags(tags));
  };

  const tagError = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type) {
    case REQUEST_TAGS:
      getTags(tagsSuccess, tagError);
      break;

    case REQUEST_NOTES_TAGS:
      getNotesTags(action.note, notesTagsSuccess, tagError);
      break;

    default:
      next(action);
  }
};
