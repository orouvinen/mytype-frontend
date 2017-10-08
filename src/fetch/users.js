import { getAuthToken } from '../helpers/auth';

export function loadUser(userId) {
  return fetch(`/api/users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getAuthToken(),
    }
  })
  .then(response => response);
}

export function loadUsers(sort = null, order = 'asc') {
  let uri = '/api/users';
  if (sort)
    uri += `?sort=${sort}&order=${order}`;

  return fetch(uri, {
    method: 'GET'
  })
  .then(response => response);
}

export function loadUserNotifications(userId) {
  return fetch(`/api/users/${userId}/notifications`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getAuthToken(),
    }
  })
  .then(response => response);
}