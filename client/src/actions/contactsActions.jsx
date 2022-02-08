import axios from 'axios';

import {
  GET_CONTACTS,
  POST_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  CONTACT_LOADING,
} from './types';

import { tokenConfig } from './userActions';
import { returnErrors } from './errorActions';

export const getContacts = () => (dispatch, getState) => {
  dispatch(setContactLoading());
  axios
    .get('/contacts', tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const postContact = (contact) => (dispatch, getState) => {
  axios
    .post('/contacts', contact, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: POST_CONTACT,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const updateContact = (contact, contact_id) => (dispatch, getState) => {
  axios
    .put(`/contacts/${contact_id}`, contact, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteContact = (contact_id) => (dispatch, getState) => {
  console.log(tokenConfig(getState));
  axios
    .delete(`/contacts/${contact_id}`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: DELETE_CONTACT,
        payload: contact_id,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const setContactLoading = () => {
  return {
    type: CONTACT_LOADING,
  };
};
