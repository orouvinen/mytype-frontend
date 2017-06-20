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