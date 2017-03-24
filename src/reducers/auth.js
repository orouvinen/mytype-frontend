import { authActions } from '../actions/action-types';

const initialState = {
  signUpRequested: false,
  accountCreated: false,  // true after succesful creation
  authFailed: false,
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
        authFailed: false,
        loggedIn: true,
        user: action.data.user
      };
    case authActions.AUTH_LOGIN_FAIL:
      return {
        ...state,
        authFailed: true,
        errorMessage: action.errorMessage,
      };
    case authActions.AUTH_LOGOUT:
      return {
        ...state,
        errorMessage: null,
        loggedIn: false,
        user: null,
      };
    case authActions.AUTH_RESET_FAILSTATE:
      return {
        ...state,
        authFailed: false,
        errorMessage: null
      };
    default:
      return state;
  }
}

export default auth;
