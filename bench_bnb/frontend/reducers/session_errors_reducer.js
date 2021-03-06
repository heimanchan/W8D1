import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  let newState = Object.assign({}, oldState);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return newState["errors"] = action.errors;
    case RECEIVE_CURRENT_USER:
      return newState["errors"] = [];
    default:
      return oldState;
  }
}

export default sessionErrorsReducer