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
