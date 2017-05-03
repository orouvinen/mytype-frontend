import { getAuthToken } from '../helpers/auth';

export function saveResult(user, competition, wpm, acc, startTime, endTime) {
  return fetch(`/api/users/${user}/results`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getAuthToken(),
    },
    body: JSON.stringify({
      user, competition, wpm, acc, startTime, endTime,
    }),
  })
  .then(response => response);
}

export function createCompetition(language, content) {
  return fetch('/api/competitions', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getAuthToken(),
    },
    body: JSON.stringify({
      language,
      content,
    }),
  })
  .then(response => response);
}