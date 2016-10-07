import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import NoteMiddleware from '../middleware/note_middleware';
import NotebookMiddleware from '../middleware/notebook_middleware';
import CreateLogger from 'redux-logger';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  NoteMiddleware,
  NotebookMiddleware,
  CreateLogger()
);

export default RootMiddleware;
