import io from 'socket.io-client';
import { takeEvery, call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { competitionActions as actionTypes } from '../actions/action-types';
import * as competitionActions from '../actions/competition';
import * as competition from '../fetch/competition';

/*
 * Watchers
 */
export function* watchCompetitionCreate() {
  yield takeEvery(actionTypes.COMPETITION_CREATE_REQUEST, createCompetition);
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
function* createCompetition(action) {
  let response = yield call(competition.createCompetition, action.language);
  
  switch(response.status) {
    case 201:
      yield put(competitionActions.createCompetitionSuccess());
      break;
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