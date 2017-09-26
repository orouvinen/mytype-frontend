import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions/user-data';
import { userDataActions as actionTypes } from '../actions/action-types';
import { loadUsers } from '../fetch/user';
import { createApiWorker } from './index';

export function* watchLeaderBoardLoad() {
  //yield takeLatest(actionTypes.USERDATA_FETCH_USERS_REQUEST, loadLeaderboardUsers);
  yield takeLatest(actionTypes.USERDATA_FETCH_USERS_REQUEST,
    createApiWorker(loadUsers, ['wpm', 'desc'],
      { 
        200: payload => actions.loadUsersSuccess(payload.users),
        "default": status => actions.loadUsersFail(status),
      }
    ));
}

function* loadLeaderboardUsers() {
  let response = yield call(loadUsers, 'wpm', 'desc');
  switch(response.status) {
    case 200:
      const body = yield call(() => response.json().then(data => data));
      yield put(actions.loadUsersSuccess(body.users));
      break;
    
    default:
      yield put(actions.loadUsersFail());
      break;
  }
}


function* apiWorker(fetchFunc, fetchArgs, httpResponseActions) {
  let response = yield call.apply(fetch, fetchArgs);
  for(const status in httpResponseActions) {
    if (httpResponseActions.hasOwnProperty(status)) {
      const actionCreator = status.value;
      yield put(actionCreator);
      return;
    }
  }
}