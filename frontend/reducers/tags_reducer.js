import {
        RECEIVE_TAGS,
        RECEIVE_TAG,
        REMOVE_TAG,
        REMOVE_TAGGING,
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

    case RECEIVE_TAG:
      const tag = action.tag;
      newState = merge({}, state);
      newState.currentNotesTags.concat(tag);
      newState.tags.unshift(tag);
      return newState;

    case SWITCH_TAG:
      newState = merge({}, state);
      newState.currentTag = action.tag;
      return newState;

    case RECEIVE_NOTES_TAGS:
      newState = merge({}, state);
      newState.currentNotesTags = action.tags;
      return newState;

    case REMOVE_TAG:
      return Object.assign(
        {},
        state,
        {tags: state.tags.filter((tag) => tag.id != action.tag.id)},
        {currentNotesTags: state.currentNotesTags.filter((tag) => tag.id != action.tag.id)}
      );

    case REMOVE_TAGGING:
      return Object.assign(
        {},
        state,
        {currentNotesTags: state.currentNotesTags.filter((tag) => tag.id != action.tag.id)}
      );

    case RECEIVE_ERRORS:
      console.log(action.errors);

    default:
      return state;
  }
}

export default TagsReducer;
