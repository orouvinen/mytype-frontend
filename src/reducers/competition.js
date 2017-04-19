import {
  competitionActions as competition, 
  socketActions as socket } from '../actions/action-types';


const initialState = {
  competitions: [],
  createCompetitionRequested: false,
  competitionCreated: false,
};

function competitions(state = initialState, action) {
  switch (action.type) {
    case socket.COMPETITIONS_UPDATE:
      return {
        ...state,
        competitions: action.competitions,
      }

    case competition.COMPETITION_CREATE_REQUEST:
      return {
        ...state,
        createCompetitionRequested: true,
      };

    case competition.COMPETITION_CREATE_SUCCESS:
      return {
        ...state,
        competitionCreated: true,
      };

    case competition.COMPETITION_CREATE_FAIL:
      return {
        ...state,
        competitionCreated: false,
      };

    default:
      return state;
  }
}

export default competitions;