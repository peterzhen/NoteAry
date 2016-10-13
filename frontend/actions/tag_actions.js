export const REQUEST_TAGS = "REQUEST_TAGS";
export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const REQUEST_TAG = "REQUEST_TAG";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const CREATE_TAG = "RECEIVE_TAG";
export const DESTROY_TAG = "DESTROY_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const SWITCH_TAG = "SWITCH_TAG";
export const REQUEST_NOTES_TAGS = "REQUEST_NOTES_TAGS";
export const RECEIVE_NOTES_TAGS = "RECEIVE_NOTES_TAGS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const requestTags = () => ({
  type: REQUEST_TAGS
});

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const requestTag = tag => ({
  type: REQUEST_TAG,
  tag
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const createTag = (tag, note_id) => ({
  type: CREATE_TAG,
  tag,
  note_id
});

export const destroyTag = tag => ({
  type: DESTROY_TAG,
  tag
})

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
})

export const switchTag = tag => ({
  type: SWITCH_TAG,
  tag
});

export const requestNotesTags = note => ({
  type: REQUEST_NOTES_TAGS,
  note
});

export const receiveNotesTags = tags => ({
  type: RECEIVE_NOTES_TAGS,
  tags
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
