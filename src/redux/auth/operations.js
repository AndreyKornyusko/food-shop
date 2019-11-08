import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  refreshUserStart,
  refreshUserSuccess,
} from './actions';
import * as selectors from './selectors';

// axios.defaults.baseURL = 'http://localhost:4040';
// https://food-shop-auth-api.herokuapp.com/
const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = null;
};

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());

  axios
    .post('https://total-name-258415.appspot.com/auth/signup', credentials)
    // .then((response)=>{console.log('response',response);})
    .then(({ data }) => {
      setAuthHeader(data.token);

      dispatch(signUpSuccess(data));
    })
    .catch(error => dispatch(signUpError(error)));
};

export const signIn = credentials => dispatch => {
  dispatch(signInRequest());

  axios
    .post('https://total-name-258415.appspot.com/auth/signin', credentials)
    .then(({ data }) => {
      setAuthHeader(data.token);
      dispatch(signInSuccess(data));
    })
    .catch(error => dispatch(signInError(error)));
};

export const signOut = () => dispatch => {
  dispatch(signOutRequest());

  axios.post('https://total-name-258415.appspot.com/auth/signout').then(() => {
    clearAuthHeader();
    dispatch(signOutSuccess());
  });
};

export const refreshCurrentUser = () => (dispatch, getState) => {
  const token = selectors.getToken(getState());

  if (!token) return;

  setAuthHeader(token);

  dispatch(refreshUserStart());

  axios
    .get('https://total-name-258415.appspot.com/auth/current')
    .then(({ data }) => dispatch(refreshUserSuccess(data.user)))
    .catch(error => {
      // dispach екшен чтобы убрать токен из state
      clearAuthHeader();
      console.log('Error while refreshing: ', error);
    });
};
