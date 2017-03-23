export function requestSignUp(name, email, password) {
  return {
    type: 'AUTH_SIGNUP_REQUEST',
    name,
    email,
    password,
  };
}

export function signUpSuccess() {
  return {
    type: 'AUTH_SIGNUP_SUCCESS',
  };
}

export function signUpFail(errorMessage) {
  return {
    type: 'AUTH_SIGNUP_FAIL',
    errorMessage,
  };
};

export function requestLogin(email, password) {
  return {
    type: 'AUTH_LOGIN_REQUEST',
    email,
    password,
  };
};

export function loginSuccess() {
  return {
    type: 'AUTH_LOGIN_SUCCESS',
  };
};

export function loginFail(errorMessage) {
  return {
    type: 'AUTH_LOGIN_FAIL',
    errorMessage,
  };
};
