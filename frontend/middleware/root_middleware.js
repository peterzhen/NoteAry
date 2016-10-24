import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import NoteMiddleware from '../middleware/note_middleware';
import NotebookMiddleware from '../middleware/notebook_middleware';
import TagMiddleware from '../middleware/tag_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  NoteMiddleware,
  NotebookMiddleware,
  TagMiddleware
);

export default RootMiddleware;
