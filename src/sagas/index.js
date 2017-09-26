import { call, put } from 'redux-saga/effects';
import { watchSignUpRequest, watchLoginRequest, watchLogout } from './auth';
import { watchCompetitionCreate, watchCompetitionListUpdate } from './competition';
import { watchCompetitionResultsUpdate } from './competition';
import { watchCompetitionLoad } from './competition';
import { watchTypingTestEnd } from './competition';
import { watchLeaderBoardLoad } from './users';

// Creates a saga worker that can be passed to take, takeLatest etc.
// Args:
//  fetchFunc: API fetch function to call.
//  fetchArgs: an array of arguments to be passed to fetchFunc.
//  httpStatusActions: key/value pairs of where each key is a HTTP status code,
//                     and value is a function that should call
//                     return a desired Redux action to dispatch.
//                     The function will receive one arg, which is the payload (if any)
//                     from the API call.
//      If you specify an entry with the key "default", the function for this key will be
//      called if no other key in the map didn't match.
//      The function of the "default" key will receive the resulting HTTP status code as
//      an argument.
export function createApiWorker(fetchFunc, fetchArgs, httpStatusActions) {
  return function*() {
    const response = yield call(fetchFunc, ...fetchArgs);
    const payload = yield call(() => response.json().then(data => data));

    for (const status in httpStatusActions) {
      const statusCode = parseInt(status);

      if (httpStatusActions.hasOwnProperty(statusCode) && response.status === statusCode) {
        const actionCreator = httpStatusActions[status];
        yield put(actionCreator(payload));
        return;
      }
    }
    if (httpStatusActions.default)
      yield put(httpStatusActions.default(response.status));
  }
}


export default function* rootSaga() {
  yield [
    watchTypingTestEnd(),
    watchCompetitionLoad(),
    watchCompetitionCreate(),
    watchCompetitionListUpdate(),
    watchCompetitionResultsUpdate(),
    watchSignUpRequest(),
    watchLoginRequest(),
    watchLogout(),
    watchLeaderBoardLoad(),
  ];
}
