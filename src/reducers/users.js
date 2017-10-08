import { userDataActions as actions } from '../actions/action-types';

const initialState = {
  loadFailed: false,
  loading: false,
  users: [],
};

function users(state = initialState, action) {
  switch (action.type) {
  case actions.USERDATA_FETCH_USERS_REQUEST:
    return {
      ...state,
      loading: true,
    };

  case actions.USERDATA_FETCH_USERS_SUCCESS:
    return {
      ...state,
      loading: false,
      loadFailed: false,
      users: action.users,
    };

  case actions.USERDATA_FETCH_USERS_FAIL:
    return {
      ...state,
      loadFailed: true,
      loading: false,
      users: [],
    }
  
  default:
    return state;
  }
}

export default users;