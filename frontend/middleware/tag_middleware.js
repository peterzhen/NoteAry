import {
        getTags,
        createTag,
        destroyTag,
        destroyTagging,
        getNotesTags
      } from '../util/tag_api_util.js'

import {
        receiveTags,
        receiveTag,
        removeTag,
        removeTagging,
        receiveNotesTags,
        receiveErrors,
        REQUEST_TAGS,
        CREATE_TAG,
        DESTROY_TAG,
        DESTROY_TAGGING,
        REQUEST_NOTES_TAGS
      } from '../actions/tag_actions.js'

export default ({getState, dispatch}) => next => action => {
  const tagsSuccess = tags => dispatch(receiveTags(tags));
  const tagSuccess = tag => dispatch(receiveTag(tag));
  const tagRemoved = tag => dispatch(removeTag(tag));
  const taggingRemoved = tag => dispatch(removeTagging(tag));
  const notesTagsSuccess = tags => dispatch(receiveNotesTags(tags));

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

    case CREATE_TAG:
      createTag(action.tag, action.note_id, tagSuccess, tagError);
      break;

    case DESTROY_TAG:
      destroyTag(action.id, tagRemoved, tagError);
      break;

    case DESTROY_TAGGING:
      destroyTagging(action.tag, action.note_id, taggingRemoved, tagError);
      break;

    default:
      next(action);
  }
};
