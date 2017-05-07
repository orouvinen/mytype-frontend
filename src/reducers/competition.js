import { competitionActions as actions } from '../actions/action-types';


const initialState = {
  competitions: [],
  createCompetitionRequested: false,
  competitionCreated: false,
  competitionLoading: false,
  competitionLoaded: false,
  competitionLoadFailed: false,
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
      };

    case actions.COMPETITION_LOAD_REQUEST:
      return {
        ...state,
        competitionLoaded: false,
        competitionLoadFailed: false,
        competitionLoading: true,
      };

    case actions.COMPETITION_LOAD_SUCCESS:
      let newState = Object.assign({}, state);
      newState.competitionLoaded = true;
      newState.competitionLoading = false;
      newState.competitionLoadFailed = false;

      newState.competitions[action.id] = action.competition;
      return newState;

    case actions.COMPETITION_LOAD_FAIL:
      return {
        ...state,
        competitionLoadFailed: true,
      };

    default:
      return state;
  }
}

export default competitions;