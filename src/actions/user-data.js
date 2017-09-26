import { userDataActions as actions } from './action-types';

export function loadUsersRequest() {
  return {
    type: actions.USERDATA_FETCH_USERS_REQUEST,
  };
}

export function loadUsersSuccess(data) {
  return {
    type: actions.USERDATA_FETCH_USERS_SUCCESS,
    data,
  };
}

export function loadUsersFail(status) {
  return {
    type: actions.USERDATA_FETCH_USERS_FAIL,
    status,
  };
}
