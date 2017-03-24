import { take, takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import { authActions } from '../actions/action-types.js';
import { storeAuthToken, deleteAuthToken } from '../helpers/auth';
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

function* authenticate(action) {
  const { email, password} = action;
  const response = yield call(auth.authenticate, email, password);

  switch (response.status) {
    case 200: // OK
      // Rretrieve reponse body as json, save JWT for future requests and
      // dispatch action for succesful login and redirect app to root route.
      const body = yield call(() => response.json().then(data => data));
      yield call(storeAuthToken, body.token);
      yield put(actions.loginSuccess(body));
      yield call(browserHistory.push, '/');
      break;

    case 401: // Unauthorized
      yield put(actions.loginFail("Invalid email address or password"));
      break;

    default:
      yield put(actions.loginFail("Can't login"));
  }
}


function* logout(action) {
  yield call(deleteAuthToken);
}

export function* watchSignUpRequest() {
  yield takeEvery(authActions.AUTH_SIGNUP_REQUEST, signUp);
}

export function* watchLoginRequest() {
  yield takeEvery(authActions.AUTH_LOGIN_REQUEST, authenticate);
}

export function* watchLogout() {
  yield takeEvery(authActions.AUTH_LOGOUT, logout);
}
