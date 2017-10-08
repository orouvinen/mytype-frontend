import { takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/users';
import { userDataActions as actionTypes } from '../actions/action-types';
import { loadUsers } from '../fetch/users';
import { createApiWorker } from './index';

export function* watchLeaderBoardLoad() {
  yield takeLatest(actionTypes.USERDATA_FETCH_USERS_REQUEST,
    createApiWorker(loadUsers, ['sortBy', 'order'],
      new Map([
        [200,
          (action, response, payload) => [actions.loadUsersSuccess(payload)]
        ],
        ['default',
          (action, response) => [actions.loadUsersFail(response.status)]
        ]
      ]), true));
}