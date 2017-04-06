import { authActions } from '../actions/action-types';

const initialState = {
  signUpRequested: false,
  requestCompleted: false,
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
        requestCompleted: false,
        signUpRequested: true,
      };
    case authActions.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        requestCompleted: true,
        accountCreated: true,
      };
    case authActions.AUTH_SIGNUP_FAIL:
      return {
        ...state,
        requestCompleted: true,
        accountCreated: false,
        errorMessage: action.errorMessage,
      };
    case authActions.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        requestCompleted: true,
        authFailed: false,
        loggedIn: true,
        user: action.data.user
      };
    case authActions.AUTH_LOGIN_FAIL:
      return {
        ...state,
        requestCompleted: true,
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
    default:
      return state;
  }
}

export default auth;
