import { competitionActions as actions } from '../actions/action-types';


const initialState = {
  competitions: [],
  createCompetitionRequested: false,
  competitionCreated: false,
  resultsLoading: false,
  resultsFetched: false,
  resultLoadFailed: false,
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

    case actions.COMPETITION_LOAD_RESULTS_REQUEST:
      return {
        ...state,
        resultsFetched: false,
        resultLoadFailed: false,
        resultsLoading: true,
      };

    case actions.COMPETITION_LOAD_RESULTS_SUCCESS:
      let newState = Object.assign({}, state);
      newState.resultsFetched = true;
      newState.resultsLoading = false;
      newState.resultLoadFailed = false;

      const competition = getCompetitionById(newState.competitions, action.competitionId); 
      competition.results = action.payload;
      return newState;

    case actions.COMPETITION_LOAD_RESULTS_FAIL:
      return {
        ...state,
        resultsLoadFailed: true,
      };

    default:
      return state;
  }
}

function getCompetitionById(competitions, id) {
  return competitions.find(competition => competition.id === id);
}

export default competitions;