// ROOT REDUCER
import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

export default combineReducers({
  contacts: contactsReducer,
  user: userReducer,
  error: errorReducer,
});
