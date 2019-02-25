import * as SessionAPI from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// regular action creator, return POJO
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

// no arguments
const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

// accepts an array
const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

// thunk action creator
export const login = user => dispatch => (
  SessionAPI.postSession(user).then(res => dispatch(receiveCurrentUser(res)))
)

// no arguments
export const logout = () => dispatch => (
  SessionAPI.deleteSession().then(() => dispatch(logoutCurrentUser()))
)

export const signup = user => dispatch => (
  SessionAPI.postUser(user).then(res => dispatch(receiveCurrentUser(res)))
)