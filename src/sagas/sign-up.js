import { take, takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import * as auth from '../fetch/auth';

function* signUp(action) {
  const { name, email, password } = action;
  let response = yield call(auth.signUp, [name, email, password]);
  if (response.status === 200)
    yield put(actions.signUpSuccess());
  // To get the response JSON:
  //response.json().then(data => console.log(data));

  // Status in response.status
}

export function* watchSignUpRequest() {
  yield takeEvery('AUTH_SIGNUP_REQUEST', signUp);
}
