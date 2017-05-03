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
export function saveResultSuccess() {
  return {
    type: actions.COMPETITION_SAVE_RESULT_SUCCESS,
  };
}