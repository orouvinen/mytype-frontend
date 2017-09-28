import { takeEvery, call } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import { reset } from '../actions/typing-test';
import { authActions } from '../actions/action-types';
import { storeAuthToken, deleteAuthToken } from '../helpers/auth';
import * as auth from '../fetch/auth';
import { browserHistory } from 'react-router';
import { createApiWorker } from './index';

/*
 * Listeners
 */
export function* watchSignUpRequest() {
  yield takeEvery(authActions.AUTH_SIGNUP_REQUEST,
    createApiWorker(auth.signUp,
      ['name', 'email', 'password'],
      new Map([
        [201, () => [actions.signUpSuccess()]],
        [409, () => [actions.signUpFail('Email is already in use')]],
        ['default', () => [actions.signUpFail('Sign up failed')]],
      ]
    )));
}

export function* watchLoginRequest() {
  yield takeEvery(authActions.AUTH_LOGIN_REQUEST,
    createApiWorker(auth.authenticate,
      ['email', 'password'],
      new Map([
        [200, (action, response, payload) =>
          [
            () => [storeAuthToken, payload.token],
            actions.loginSuccess(payload),
            reset(),
            () => [browserHistory.push, '/']
          ]
        ],
        [401, () => [actions.loginFail('Invalid email address or password')]],
        ['default', () => [actions.loginFail('Can\'t login')]]
      ]
    )));
}

export function* watchLogout() {
  yield takeEvery(authActions.AUTH_LOGOUT, 
    function*() {
      yield call(deleteAuthToken);
    });
}

