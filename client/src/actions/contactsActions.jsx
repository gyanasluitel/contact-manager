import {
  GET_CONTACTS,
  POST_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
} from './types';

export const getContacts = () => {
  return {
    type: GET_CONTACTS,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const postContact = (contact) => {
  return {
    type: POST_CONTACT,
    payload: contact,
  };
};
