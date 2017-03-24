import { take, takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import { authActions } from '../actions/action-types.js';
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
      break;
    default:
      yield put(actions.signUpFail("Sign up failed"));
  }
}

function* login(action) {
  const { email, password} = action;
  const response = yield call(auth.authenticate, email, password);

  switch (response.status) {
    case 200:
      // Retrieve reponse body as json and dispatch action for succesful login
      const body = yield call(() => response.json().then(data => data));
      yield put(actions.loginSuccess(body)); 
      break;

    default:
      yield put(actions.loginFail("Can't login"));
  }
}


export function* watchSignUpRequest() {
  yield takeEvery(authActions.AUTH_SIGNUP_REQUEST, signUp);
}

export function* watchLoginRequest() {
  yield takeEvery(authActions.AUTH_LOGIN_REQUEST, login);
}
