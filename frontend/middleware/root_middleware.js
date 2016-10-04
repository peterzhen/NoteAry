import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware
);

export default RootMiddleware;
