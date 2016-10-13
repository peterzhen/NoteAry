import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import NotesReducer from './notes_reducer';
import NotebooksReducer from './notebooks_reducer';
import TagsReducer from './tags_reducer';

export default combineReducers({
  session: SessionReducer,
  notes: NotesReducer,
  notebooks: NotebooksReducer,
  tags: TagsReducer
});
