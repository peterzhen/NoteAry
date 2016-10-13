import {
        RECEIVE_TAGS,
        SWITCH_TAG
      } from '../actions/tag_actions';

import merge from 'lodash/merge';

const _nullTags = Object.freeze({
  currentTag: null,
  tags: [],
  errors: []
});

const TagsReducer = (state = _nullTags, action) => {
  let newState;
  switch(action.type){
    case RECEIVE_TAGS:
      const tags = action.tags;
      return Object.assign({}, state, {
        tags
      });

    case SWITCH_TAG:
      newState = merge({}, state);
      newState.currentTag = action.tag;
      return newState;

    default:
      return state;
  }
}

export default TagsReducer;
