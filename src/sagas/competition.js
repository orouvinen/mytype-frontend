import io from 'socket.io-client';
import { takeEvery, call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { typingActions as typingActionTypes,
         competitionActions as competitionActionTypes } from '../actions/action-types';
import * as competitionActions from '../actions/competition';
import * as competition from '../fetch/competition';

/*
 * Watchers
 */
export function* watchTypingTestEnd() {
  yield takeEvery(typingActionTypes.TYPINGTEST_DONE, storeResult);
}

export function* watchCompetitionLoad() {
  yield takeEvery(competitionActionTypes.COMPETITION_LOAD_REQUEST, loadCompetition);
}

export function* watchCompetitionCreate() {
  yield takeEvery(competitionActionTypes.COMPETITION_CREATE_REQUEST, createCompetition);
}

export function* watchCompetitionListUpdates() {
  const socket = yield call(createSocket);
  const socketChannel = yield call(createCompetitionListUpdateChannel, socket);

  while (true) {
    const data = yield take(socketChannel);
    yield put(competitionActions.updateCompetitionList(data));
  }
}


/*
 * Workers
 */

/*
 * Save a competition results
 */
function* storeResult(action) {
  const { userId, competitionId, wpm, acc, startTime, endTime } = action;
  let response = yield call(competition.saveResult, userId, competitionId,
                                                     wpm, acc, startTime, endTime);

  switch(response.status) {
    case 201:
      yield* put(competitionActions.saveResultSuccess());
      yield* put(competitionActions.requestLoadCompetition(competitionId));
      break;
    default:
      // TODO: handle error
      break;
  }
}


/*
 * Fetches all results for a competition.
 */
function* loadCompetition(action) {
  let response = yield call(competition.loadCompetition, action.competitionId);

  switch(response.status) {
    case 200:
      const body = yield call(() => response.json().then(data => data));
      yield put(competitionActions.loadCompetitionSuccess(body.id, body));
      break;
    default:
      yield put(competitionActions.loadCompetitionFail());
  }
}


function* createCompetition(action) {
  let response = yield call(competition.createCompetition, action.language, action.content);
  
  switch(response.status) {
    case 201:
      yield put(competitionActions.createCompetitionSuccess());
      break;
    case 401:
    case 500:
      yield put(competitionActions.createCompetitionFail());
      break;
    default:
      break;
  }
}

// Creates an event channel that emits websocket events
function createCompetitionListUpdateChannel(socket) {
  return eventChannel(emit => {
    const competitionListHandler = event => {
      emit(event);
    };
    socket.on('competitionListUpdate', competitionListHandler);
    // Return unsubscribe function
    return() => {
      socket.close();
    };
  });
}

function createSocket() {
  return io();
}