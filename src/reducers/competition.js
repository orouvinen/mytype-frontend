import { competitionActions as actions } from '../actions/action-types';


const initialState = {
  competitions: [],
  createCompetitionRequested: false,
  competitionCreated: false,
  selected: null,
};

function competitions(state = initialState, action) {
  switch (action.type) {
    case actions.COMPETITIONS_UPDATE:
      return {
        ...state,
        competitions: action.competitions,
      };

    case actions.COMPETITION_CREATE_REQUEST:
      return {
        ...state,
        createCompetitionRequested: true,
      };

    case actions.COMPETITION_CREATE_SUCCESS:
      return {
        ...state,
        competitionCreated: true,
      };

    case actions.COMPETITION_CREATE_FAIL:
      return {
        ...state,
        competitionCreated: false,
      };
    
    case actions.COMPETITION_SELECT:
      return {
        ...state,
        selected: action.id,
      }

    default:
      return state;
  }
}

export default competitions;