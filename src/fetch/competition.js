import { getAuthToken } from '../helpers/auth';

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