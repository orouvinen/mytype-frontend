export const authActions = {
  AUTH_SIGNUP_REQUEST: 'AUTH_SIGNUP_REQUEST',
  AUTH_SIGNUP_SUCCESS: 'AUTH_SIGNUP_SUCCESS',
  AUTH_SIGNUP_FAIL: 'AUTH_SIGNUP_FAIL',
  AUTH_LOGIN_REQUEST: 'AUTH_LOGIN_REQUEST',
  AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_FAIL: 'AUTH_LOGIN_FAIL',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
};

export const typingActions = {
  TYPINGTEST_WORD_TYPED: 'TYPINGTEST_WORD_TYPED',
  TYPINGTEST_SET_TEXT: 'TYPINGTEST_SET_TEXT',
  TYPINGTEST_START: 'TYPINGTEST_START',
  TYPINGTEST_DONE: 'TYPINGTEST_DONE',
  TYPINGTEST_RESET: 'TYPINGTEST_RESET',
  TYPINGTEST_KEYPRESS: 'TYPINGTEST_KEYPRESS',
  TYPINGTEST_CHARACTER: 'TYPINGTEST_CHARACER',
  TYPINGTEST_ERASE: 'TYPINGTEST_ERASE',
};

export const competitionActions = {
  COMPETITION_CREATE_REQUEST: 'COMPETITION_CREATE_REQUEST',
  COMPETITION_CREATE_SUCCESS: 'COMPETITION_CREATE_SUCCESS',
  COMPETITION_CREATE_FAIL: 'COMPETITION_CREATE_FAIL',
  COMPETITIONS_UPDATE: 'COMPETITIONS_UPDATE',
  COMPETITION_RESULTS_UPDATE: 'COMPETITION_RESULTS_UPDATE',
  COMPETITION_SELECT: 'COMPETITION_SELECT',
  COMPETITION_LOAD_REQUEST: 'COMPETITION_LOAD_REQUEST',
  COMPETITION_LOAD_SUCCESS: 'COMPETITION_LOAD_SUCCESS',
  COMPETITION_LOAD_FAIL: 'COMPETITION_LOAD_FAIL',
  COMPETITION_SAVE_RESULT_SUCCESS: 'COMPETITION_SAVE_RESULT_SUCCESS',
};

export const uiActions = {
  COMPETITION_LIST_NEXT_PAGE: 'COMPETITION_LIST_NEXT_PAGE',
  COMPETITION_LIST_PREV_PAGE: 'COMPETITION_LIST_PREV_PAGE',
  COMPETITION_LIST_SET_PAGE: 'COMPETITION_LIST_SET_PAGE',
};

export const userDataActions = {
  USERDATA_FETCH_USERS_REQUEST: 'USERDATA_FETCH_USERS_REQUEST',
  USERDATA_FETCH_USERS_SUCCESS: 'USERDATA_FETCH_USERS_SUCCESS',
  USERDATA_FETCH_USERS_FAIL: 'USERDATA_FETCH_USERS_FAIL',
};