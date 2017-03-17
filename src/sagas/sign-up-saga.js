import { take, call } from 'redux-saga/effects';

function* signUp() {
}

function* watchSignUpRequest() {
  while (true) {
    const action = yield take('AUTH_SIGNUP_REQUEST', signUp);
  }
}

export { watchSignUpRequest };
