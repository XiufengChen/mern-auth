import axios from 'axios';
// browserHistory is to communicate information about URL to react-router
// we can also use browserHistory in reverse functionality as it can make changes to the URL as well.(programmatic navigation)
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  // In order to get access dispatch any time we want
  console.log({ email, password })
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good ...
        // - Update state to indicate user is aithenticated
        dispatch({ type: AUTH_USER });
        // - Save jwt token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
