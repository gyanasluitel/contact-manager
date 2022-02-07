import { v1 as uuid } from 'uuid';

import {
  GET_CONTACTS,
  POST_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from '../actions/types';

const initialState = {
  contacts: [
    { id: uuid(), name: 'Gyanas' },
    { id: uuid(), name: 'Utsav' },
    { id: uuid(), name: 'Babin' },
    { id: uuid(), name: 'Nischal' },
    { id: uuid(), name: 'Harvard' },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        // contacts: action.payload
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case POST_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
}
