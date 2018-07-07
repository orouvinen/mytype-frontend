import { call, take, put, takeLatest } from 'redux-saga/effects';
import { createApiWorker } from './index';
import { notificationActions as actionTypes } from '../actions/action-types';
import * as actions from '../actions/notifications';
import { loadUserNotifications } from '../fetch/users';
import { getSocket, createEventChannel } from './index';

export function* watchNotificationsLoad() {
  yield takeLatest(actionTypes.NOTIFICATION_LOAD_NOTIFICATIONS_REQUEST,
    createApiWorker(loadUserNotifications, ['userId'],
    new Map([
      [200, (action, response, payload) => [actions.loadNotificationsSuccess(payload)]],
      ['default', (action, response) => [actions.loadNotificationsFail()]]
    ])));
}

export function* watchNotificationPush() {
  const socket = yield call(getSocket);
  const socketChannel = yield call(createEventChannel, socket, 'eventNotification');

  while(true) {
    const data = yield take(socketChannel);
    yield put(actions.addNotification(data));
  }
}
