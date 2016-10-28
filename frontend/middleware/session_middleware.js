import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  let user;
  switch(action.type){
    case LOGIN:
      user = action.user;
      user.user.username = user.user.username.toLowerCase();
      login(user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      user = action.user;
      user.user.username = user.user.username.toLowerCase();
      signup(user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
