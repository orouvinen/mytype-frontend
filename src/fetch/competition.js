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

export function loadCompetitions(finished = false) {
  return fetch(`/api/competitions?finished=${finished}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(response => response);
}


export function loadCompetition(competitionId, loadResults=true) {
  return fetch(`/api/competitions/${competitionId}?loadResults=${loadResults}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(response => response);
}

export function createCompetition(language, content, createdBy) {
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
      createdBy,
    }),
  })
  .then(response => response);
}