import { competitionActions as actions } from './action-types';

export function requestCreateCompetition(language, content, user) {
  return {
    type: actions.COMPETITION_CREATE_REQUEST,
    language,
    content,
    createdBy: user.id,
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

export function updateCompetitionResults(competitionId, results) {
  return {
    type: actions.COMPETITION_RESULTS_UPDATE,
    competitionId,
    results,
  }
}

export function selectCompetition(id) {
  return {
    type: actions.COMPETITION_SELECT,
    id,
  };
}

// Argument `finished` indicates whether to load closed competitions
// (by default requst competitions that are currently running.)
export function requestLoadCompetitions(finished = false) {
  return {
    type: actions.COMPETITION_LOAD_ALL_REQUEST,
    finished,
  };
}

export function loadCompetitionsSuccess(competitions) {
  return {
    type: actions.COMPETITION_LOAD_ALL_SUCCESS,
    competitions,
  };
}

export function loadCompetitionsFail() {
  return {
    type: actions.COMPETITION_LOAD_ALL_FAIL,
  };
}

export function requestLoadCompetition(competitionId) {
  return {
    type: actions.COMPETITION_LOAD_REQUEST,
    competitionId,
  };
}

export function loadCompetitionSuccess(id, competition) {
  return {
    type: actions.COMPETITION_LOAD_SUCCESS,
    id,
    competition,
  };
}

export function loadCompetitionFail() {
  return {
    type: actions.COMPETITION_LOAD_FAIL,
  };
}

export function saveResult(userId, competitionId, wpm, acc, startTime, endTime) {
  return {
    type: actions.COMPETITION_SAVE_RESULT_REQUEST,
    userId,
    competitionId,
    wpm,
    acc,
    startTime,
    endTime,
  };
}

export function saveResultSuccess() {
  return {
    type: actions.COMPETITION_SAVE_RESULT_SUCCESS,
  };
}