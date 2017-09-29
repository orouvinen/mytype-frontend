import { takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/user-data';
import { userDataActions as actionTypes } from '../actions/action-types';
import { loadUsers } from '../fetch/user';
import { createApiWorker } from './index';

export function* watchLeaderBoardLoad() {
  yield takeLatest(actionTypes.USERDATA_FETCH_USERS_REQUEST,
    createApiWorker(loadUsers, ['sortBy', 'order'],
      new Map([
        [200,
          (action, response, payload) => [actions.loadUsersSuccess(payload.users)]
        ],
        ['default',
          (action, response) => [actions.loadUsersFail(response.status)]
        ]
      ]), true));
}