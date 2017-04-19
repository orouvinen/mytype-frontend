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
      console.log(event);
      emit(event);
    };
    socket.on('competitionListUpdate', competitionListHandler);
    // Return unsubscribe function
    return() => {
      socket.close();
    };
  });
}

// https://github.com/redux-saga/redux-saga/blob/master/docs/advanced/Channels.md
export function* watchCompetitionListUpdates() {
  const socket = yield call(createSocket);
  const socketChannel = yield call(createCompetitionListUpdateChannel, socket);

  while (true) {
    const data = yield take(socketChannel);
    yield put(actions.updateCompetitionList(data));
  }
}