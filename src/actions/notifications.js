import { notificationActions as actions } from './action-types';

export function loadNotificationsRequest(userId) {
  return {
    type: actions.NOTIFICATION_LOAD_NOTIFICATIONS_REQUEST,
    userId,
  };
}

export function loadNotificationsSuccess(notifications) {
  return {
    type: actions.NOTIFICATION_LOAD_NOTIFICATIONS_SUCCESS,
    notifications,
  };
}

export function loadNotificationsFail() {
  return {
    type: actions.NOTIFICATION_ACKNOWLEDGE_FAIL,
  };
}

export function acknowledge(notificationId) {
  return {
    type: actions.NOTIFICATION_ACKNOWLEDGE_REQUEST,
    notificationId,
  };
}

export function acknowledgeSuccess() {
  return {
    type: actions.NOTIFICATION_ACKNOWLEDGE_SUCCESS,
  };
}

export function acknowledgeFail() {
  return {
    type: actions.NOTIFICATION_ACKNOWLEDGE_FAIL,
  };
}

export function addNotification(notification) {
  return {
    type: actions.NOTIFICATION_ADD,
    notification,
  };
}

export function deleteNotifications() {
  return {
    type: actions.NOTIFICATION_EMPTY,
  };
}