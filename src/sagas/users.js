import { takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/user-data';
import { userDataActions as actionTypes } from '../actions/action-types';
import { loadUsers } from '../fetch/user';
import { createApiWorker } from './index';

export function* watchLeaderBoardLoad() {
  yield takeLatest(actionTypes.USERDATA_FETCH_USERS_REQUEST,
    createApiWorker(loadUsers, ['wpm', 'desc'],
      { 
        200: payload => actions.loadUsersSuccess(payload.users),
        "default": status => actions.loadUsersFail(status),
      }
    ));
}