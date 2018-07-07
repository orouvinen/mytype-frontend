import { isEmpty } from '../helpers/util';
import { takeEvery, call, put, take } from 'redux-saga/effects';
import { /*typingActions as typingActionTypes, */
         competitionActions as competitionActionTypes } from '../actions/action-types';
import * as competitionActions from '../actions/competition';
import * as competition from '../fetch/competition';
import { createApiWorker, createEventChannel, getSocket } from './index';

export function* watchTypingTestEnd() {
  yield takeEvery(competitionActionTypes.COMPETITION_SAVE_RESULT_REQUEST,
    createApiWorker(competition.saveResult,
      ['userId', 'competitionId', 'wpm', 'acc', 'startTime', 'endTime'],
      new Map([
        [201, (action, response) => [
          competitionActions.saveResultSuccess(),
          competitionActions.requestLoadCompetition(action.competitionId),
        ],
        // TODO add 'default' callback for error handling
      ]
      ])));
}

export function* watchCompetitionsLoad() {
  yield takeEvery(competitionActionTypes.COMPETITION_LOAD_ALL_REQUEST,
    createApiWorker(competition.loadCompetitions, ['finished'],
    new Map([
      [200, (action, response, payload) => [
          competitionActions.loadCompetitionsSuccess(payload)
        ]
      ],
      ['default', (action, response) =>
        [ competitionActions.loadCompetitionsFail() ]
      ]
    ])));
}

export function* watchCompetitionLoad() {
  yield takeEvery(competitionActionTypes.COMPETITION_LOAD_REQUEST,
    createApiWorker(competition.loadCompetition, ['competitionId'],
    new Map([
      [200, (action, response, competition) =>
        [competitionActions.loadCompetitionSuccess(competition.id, competition)]
      ],
      ['default', (action, response) =>
        [competitionActions.loadCompetitionFail()]]
     ])));
}


export function* watchCompetitionCreate() {
  yield takeEvery(competitionActionTypes.COMPETITION_CREATE_REQUEST,
    createApiWorker(competition.createCompetition,
      ['language', 'content', 'createdBy'],
      new Map([
        [201, (action, response, _) => {
          const compUri = response.headers.get('location');
          const id = parseInt(compUri.slice(compUri.lastIndexOf('/') + 1), 10);
          return [
            competitionActions.createCompetitionSuccess(),
            competitionActions.selectCompetition(id),
            competitionActions.requestLoadCompetition(id),
          ];
        }],
        ['default',
          (action, response) => [competitionActions.createCompetitionFail()]]
      ])));
}


export function* watchCompetitionListUpdate() {
  const socket = yield call(getSocket);
  const socketChannel = yield call(createEventChannel, socket, 'competitionListUpdate');

  while (true) {
    const competitions = yield take(socketChannel);
    // Competition results come as an object (that maps from user id to a result)
    // from the back-end. It's more suitable for the front-end to process the
    // results as an array, so let's convert.
    Object.keys(competitions).forEach(compId => {
      const comp = competitions[compId];
      let results = [];

      if (!isEmpty(comp.results)) {
        Object.keys(comp.results).forEach(userId => {
          results.push(comp.results[userId]);
        });
      }
      comp.results = sortResults(results);
    });
    yield put(competitionActions.updateCompetitionList(competitions));
  }
}


export function* watchCompetitionResultsUpdate() {
  const socket = yield call(getSocket);
  const socketChannel = yield call(createEventChannel, socket, 'competitionResultsUpdate');

  while (true) {
    const data = yield take(socketChannel);
    const competitionId = parseInt(data.competition, 10);
    let results = [];
    for (let userId in data.results) {
      if (data.results.hasOwnProperty(userId))
        results.push(data.results[userId]);
    }
    yield put(competitionActions.updateCompetitionResults(competitionId, sortResults(results)));
  }
}



// Sorts competition result array
function sortResults(results) {
  return results.sort((a, b) => {
    // Sort results by wpm in descending order.
    // Better of two equal WPM results will be the one that was
    // typed first.
    if (a.wpm > b.wpm)
      return -1;
    else if (a.wpm < b.wpm)
      return 1;
    else
      return a.endTime - b.endTime;
  });
}


