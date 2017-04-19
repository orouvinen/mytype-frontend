import { call, take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import * as actions from '../actions/socket';

function createSocket() {
  return io();
}

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

export function* watchCompetitionListUpdates() {
  const socket = yield call(createSocket);
  const socketChannel = yield call(createCompetitionListUpdateChannel, socket);

  while (true) {
    const data = yield take(socketChannel);
    yield put(actions.updateCompetitionList(data));
  }
}