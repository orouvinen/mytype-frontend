import { take, takeEvery, call, put } from 'redux-saga/effects';

function* signUp(action) {
  console.log("foo");
  console.log(action);
}

export function* watchSignUpRequest() {
  yield takeEvery('AUTH_SIGNUP_REQUEST', signUp);
}
