import { userDataActions as actions } from './action-types';

export function loadUsersRequest(sortBy, order) {
  return {
    type: actions.USERDATA_FETCH_USERS_REQUEST,
    sortBy,
    order
  };
}

export function loadUsersSuccess(users) {
  return {
    type: actions.USERDATA_FETCH_USERS_SUCCESS,
    users,
  };
}

export function loadUsersFail(status) {
  return {
    type: actions.USERDATA_FETCH_USERS_FAIL,
    status,
  };
}
