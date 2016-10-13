import {
        RECEIVE_TAGS,
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

    default:
      return state;
  }
}

export default TagsReducer;
