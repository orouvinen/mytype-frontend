import { authActions } from '../actions/action-types';

const initialState = {
  signUpRequested: false,
  accountCreated: false,  // true after succesful creation
  errorMessage: null,
  loggedIn: false,
  user: null,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case authActions.AUTH_SIGNUP_REQUEST:
      return {
        ...state,
        signUpRequested: true,
      };
    case authActions.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        accountCreated: true,
      };
    case authActions.AUTH_SIGNUP_FAIL:
      return {
        ...state,
        accountCreated: false,
        errorMessage: action.errorMessage,
      };
    case authActions.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.data.user
      };
      break;
    case authActions.AUTH_LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}

export default auth;
