import { takeEvery, call, put } from 'redux-saga/effects';
import * as competitionActions from '../actions/competition';
import { competitionActions as actionTypes } from '../actions/action-types';
import * as competition from '../fetch/competition';

export function* watchCompetitionCreate() {
  yield takeEvery(actionTypes.COMPETITION_CREATE_REQUEST, createCompetition);
}

function* createCompetition(action) {
  let response = yield call(competition.createCompetition, action.language);
  
  switch(response.status) {
    case 201:
      yield put(competitionActions.createCompetitionSuccess());
      break;
    case 500:
      yield put(competitionActions.createCompetitionFail());
      break;
    default:
      break;
  }
}