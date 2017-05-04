import { competitionActions as actions } from './action-types';

export function requestCreateCompetition(language, content) {
  return {
    type: actions.COMPETITION_CREATE_REQUEST,
    language,
    content,
  };
}

export function createCompetitionSuccess() {
  return {
    type: actions.COMPETITION_CREATE_SUCCESS,
  };
}

export function createCompetitionFail() {
  return {
    type: actions.COMPETITION_CREATE_FAIL,
  };
}

export function updateCompetitionList(competitions) {
  return {
    type: actions.COMPETITIONS_UPDATE,
    competitions,
  };
}

export function selectCompetition(id) {
  return {
    type: actions.COMPETITION_SELECT,
    id,
  };
}

export function requestLoadResults(competitionId) {
  return {
    type: actions.COMPETITION_LOAD_RESULTS_REQUEST,
    competitionId,
  };
}

export function loadResultsSuccess(competitionId, payload) {
  return {
    type: actions.COMPETITION_LOAD_RESULTS_SUCCESS,
    competitionId,
    payload,
  };
}

export function loadResultsFail() {
  return {
    type: actions.COMPETITION_LOAD_RESULTS_FAIL,
  };
}

export function saveResultSuccess() {
  return {
    type: actions.COMPETITION_SAVE_RESULT_SUCCESS,
  };
}