import { v1 as uuid } from 'uuid';

import {
  GET_CONTACTS,
  POST_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CONTACT_LOADING,
} from '../actions/types';

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
