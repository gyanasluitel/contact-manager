import {
  GET_CONTACTS,
  POST_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CONTACT_LOADING,
  UPDATE_FAVORITE,
} from '../actions/types';

import { Navigate } from 'react-router-dom';

const initialState = {
  contacts: [],
  isLoading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        isLoading: false,
      };
    case POST_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
      };
    case UPDATE_FAVORITE: {
      // let index = state.contacts.findIndex(contact => contact._id === action.payload._id)
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
      };
    }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
      };

    case CONTACT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
