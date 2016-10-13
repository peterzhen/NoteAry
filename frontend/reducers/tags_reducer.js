import {
        RECEIVE_TAGS,
        RECEIVE_NOTES_TAGS,
        SWITCH_TAG,
        RECEIVE_ERRORS
      } from '../actions/tag_actions';

import merge from 'lodash/merge';

const _nullTags = Object.freeze({
  currentTag: null,
  tags: [],
  currentNotesTags: [],
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

    case RECEIVE_NOTES_TAGS:
      newState = merge({}, state);
      newState.currentNotesTags = action.tags;
      return newState;

    case RECEIVE_ERRORS:
      console.log(action.errors);

    default:
      return state;
  }
}

export default TagsReducer;
