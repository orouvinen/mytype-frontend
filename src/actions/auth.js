import { authActions } from './action-types';

export function requestSignUp(name, email, password) {
  return {
    type: authActions.AUTH_SIGNUP_REQUEST,
    name,
    email,
    password,
  };
}

export function signUpSuccess() {
  return {
    type: authActions.AUTH_SIGNUP_SUCCESS,
  };
}

export function signUpFail(errorMessage) {
  return {
    type: authActions.AUTH_SIGNUP_FAIL,
    errorMessage,
  };
}

export function requestLogin(email, password) {
  return {
    type: authActions.AUTH_LOGIN_REQUEST,
    email,
    password,
  };
}

export function loginSuccess(payload) {
  return {
    type: authActions.AUTH_LOGIN_SUCCESS,
    data: payload,
  };
}

export function loginFail(errorMessage) {
  return {
    type: authActions.AUTH_LOGIN_FAIL,
    errorMessage,
  };
}

export function logout() {
  return {
    type: authActions.AUTH_LOGOUT,
  };
}
