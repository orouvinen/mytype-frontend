import { takeLatest } from 'redux-saga/effects';
import { createApiWorker } from './index';
import { notificationActions as actionTypes } from '../actions/action-types';
import * as actions from '../actions/notification';
import { loadUserNotifications } from '../fetch/user';

export function* watchNotificationsLoad() {
  yield takeLatest(actionTypes.NOTIFICATION_LOAD_NOTIFICATIONS_REQUEST,
    createApiWorker(loadUserNotifications, ['userId'],
    new Map([
      [200, (action, response, payload) => [actions.loadNotificationsSuccess(payload)]],
      ['default', (action, response) => [actions.loadNotificationsFail()]]
    ])));
}
