import {
        getTags
      } from '../util/tag_api_util.js'

import {
        receiveTags,
        REQUEST_TAGS,
      } from '../actions/tag_actions.js'

export default ({getState, dispatch}) => next => action => {
  const tagsSuccess = tags => {
    dispatch(receiveTags(tags));
  };
  const tagError = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type) {
    case REQUEST_TAGS:
      getTags(tagsSuccess);
      break;

    default:
      next(action);
  }
};
