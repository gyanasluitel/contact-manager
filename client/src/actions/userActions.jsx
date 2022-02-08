import axios from 'axios';
import { returnErrors } from './errorActions';

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from './types';

// Check Token, Load User
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios
    .get('/user', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// SIGN UP
export const signUp =
  ({ email, password }) =>
  (dispatch) => {
    //Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const body = JSON.stringify({
      email,
      password,
    });

    axios
      .post('/signup', body, config)
      .then((res) =>
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'SIGNIN_FAIL')
        );
        dispatch({
          type: SIGNUP_FAIL,
        });
      });
  };

export const signIn =
  ({ email, password }) =>
  (dispatch) => {
    //Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const body = JSON.stringify({
      email,
      password,
    });

    // console.log('config', config);
    axios
      .post('/signin', body, config)
      .then((res) =>
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data, err.response.status, 'SINGUP_FAIL')
        );
        dispatch({
          type: SIGNIN_FAIL,
        });
      });
  };

export const signOut = () => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const { token } = getState().user;

  //Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  //If token, add to headers config
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};
