import { call, put } from 'redux-saga/effects';
import { watchSignUpRequest, watchLoginRequest, watchLogout } from './auth';
import { watchCompetitionCreate, watchCompetitionListUpdate } from './competition';
import { watchCompetitionResultsUpdate } from './competition';
import { watchCompetitionLoad } from './competition';
import { watchTypingTestEnd } from './competition';
import { watchLeaderBoardLoad } from './users';
import { watchNotificationsLoad } from './notification';

// Creates a saga worker that can be passed to take, takeLatest etc.
// Basically it captures the pattern of receiving an async Redux action,
// making an API call based on the action, getting data from the response,
// and then dispatching a Redux action (fail, success, etc) to end
// the action.
//
// Args:
//
// apiFunc: 
//    API fetch function to call (located in '../fetch/*')
//
// args:
//   Arguments, as an array, to be passed to 'apiFunc'. See 'actionArgs' below.
//
// actionArgs:
//  If true, then the 'apiFunc' args will collected from the Redux action object by the keys
//  given in 'args'.
//  (The action will passed in by Redux-saga.)
//  If false, the args are passed directly to 'apiFunc'.
//
// resActions:
//  a Map where each entry is a pair of HTTP code and a callback function to handle that
//  status code returned from the API.
//    The callback receives three arguments:
//    the original Redux action, a HTTP response object from fetch,
//    and the actual data extracted from the response object.
// 
//  The return array from the callbacks can contain plain Redux action objects and
//  functions. Plain objects are subject to saga put effect. If a callback return
//  element is a function, it must return an array, where the first element is a
//  function and rest of the elements are arguments for that function. The function
//  and its arguments are then passed to saga 'call' effect.
//
//  Elements from the return array are processed in the order they appear.
//
//  The map may contain a special key 'default', which specifies a fallback callback - much like in a
//  switch-statement - that will be called if no handler was found for the returned status code.
//  The 'default' callback receives two arguments: the original Redux object and the HTTP response object.
export function createApiWorker(apiFunc, args, resActions, actionArgs = true) {
  return function*(action) {
    const fetchArgs = actionArgs ? args.map(arg => action[arg]) : args;
    const response = yield call(apiFunc, ...fetchArgs);
    
    const payload = yield call(() =>
      response.json()
        .then(data => data)
        .catch(_ => null));
      
    const statusCode = parseInt(response.status, 10);

    for (let [status, callback] of resActions) {
      if (status === statusCode) {
        const actions = callback(action, response, payload);
        for(let a of actions)
          yield (typeof(a) === 'function') ? call(...a()) : put(a);

        return;
      }
    }
    if (resActions.has('default')) {
      for (let a of resActions.get('default')(action, response))
        yield (typeof(a) === 'function') ? call(...a()) : put(a);
    }
  };
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
    watchNotificationsLoad(),
  ];
}
