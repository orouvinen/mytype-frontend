import { competitionActions as actions } from '../actions/action-types';


const initialState = {
  competitions: {},
  createCompetitionRequested: false,
  competitionCreated: false,
  competitionLoading: false,
  competitionLoaded: false,
  competitionLoadFailed: false,
  selected: null,
};

// Helper for creating deep copy of the state
const cloneState = state => {
  return {
    ...state,
    competitions: {...state.competitions }
  };
}

function competitions(state = initialState, action) {
  switch (action.type) {
    case actions.COMPETITIONS_UPDATE:
      return {
        ...cloneState(state),
        competitions: action.competitions,
      }

    case actions.COMPETITION_CREATE_REQUEST:
      return {
        ...cloneState(state),
        createCompetitionRequested: true,
      };

    case actions.COMPETITION_CREATE_SUCCESS:
      return {
        ...cloneState(state),
        competitionCreated: true,
      };

    case actions.COMPETITION_CREATE_FAIL:
      return {
        ...cloneState(state),
        competitionCreated: false,
      };
    
    case actions.COMPETITION_SELECT:
      return {
        ...cloneState(state),
        selected: action.id,
      };

    case actions.COMPETITION_LOAD_REQUEST:
      return {
        ...cloneState(state),
        competitionLoaded: false,
        competitionLoadFailed: false,
        competitionLoading: true,
      };

    case actions.COMPETITION_LOAD_SUCCESS:
      let newState = cloneState(state); 
      newState.competitionLoaded = true;
      newState.competitionLoading = false;
      newState.competitionLoadFailed = false;

      newState.competitions[action.id] = action.competition;
      return newState;

    case actions.COMPETITION_LOAD_FAIL:
      return {
        ...cloneState(state),
        competitionLoadFailed: true,
      };

    default:
      return state;
  }
}

export default competitions;