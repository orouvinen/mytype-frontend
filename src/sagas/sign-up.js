import { take, takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import * as auth from '../fetch/auth';
import { browserHistory } from 'react-router';


function* signUp(action) {
  const { name, email, password } = action;
  let response = yield call(auth.signUp, name, email, password);
  switch (response.status) {
    case 200:
      yield put(actions.signUpSuccess());
      break;
    case 409:
      yield put(actions.signUpFail("Email is already in use"));
      response.json().then(data => console.log(data));
      break;
    default:
      yield put(actions.signUpFail("Sign up failed"));
  }
  //response.json().then(data => console.log(data));
}

export function* watchSignUpRequest() {
  yield takeEvery('AUTH_SIGNUP_REQUEST', signUp);
}
