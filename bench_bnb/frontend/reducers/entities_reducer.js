import { combineReducers } from 'redux';
import usersReducer from '../reducers/users_reducer';

export default combineReducers({
  users: usersReducer
})