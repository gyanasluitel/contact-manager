import axios from 'axios';

import {
  GET_CONTACTS,
  POST_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CONTACT_LOADING,
} from './types';

export const getContacts = () => (dispatch) => {
  dispatch(setContactLoading());
  axios.get('/contacts').then((res) =>
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    })
  );
};

export const postContact = (contact) => (dispatch) => {
  axios.post('/contacts', contact).then((res) =>
    dispatch({
      type: POST_CONTACT,
      payload: res.data,
    })
  );
};

export const deleteContact = (contact_id) => (dispatch) => {
  axios.delete(`/contacts/${contact_id}`).then((res) =>
    dispatch({
      type: DELETE_CONTACT,
      payload: contact_id,
    })
  );
};

export const setContactLoading = () => {
  return {
    type: CONTACT_LOADING,
  };
};
