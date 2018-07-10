import { getAuthToken } from '../helpers/auth';

function queryParamArray(paramName, valuesArray) {
  let q = '?';

  valuesArray.forEach(v => {
    q += `${paramName}[]=${v}&`;
  });

  // remove trailing '&'
  return q.substring(0, q.length - 1);
}

export function acknowledgeNotifications(notificationIds) {
  let queryParams = queryParamArray('notificationIds', notificationIds);

  return fetch(`/api/notifications/acknowledge${queryParams}`, {
    method: 'PUT',
    query: notificationIds,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getAuthToken(),
    }
  })
  .then(response => response);
}