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

// (ugly) Helper for creating deep copy of the state
function cloneState(state) {
  let newState = {
    ...state,
    competitions: { ...state.competitions }
  };

  // Make deep copies of result objects and the user objects inside those.
  Object.keys(newState.competitions).forEach(id => {
    const results = newState.competitions[id].results.slice(0);

    results.forEach((r, i) => {
      r.user = Object.assign({}, state.competitions[id].results[i].user);
    });
    newState.competitions[id].results = results;
  });

  return newState;
}

function competitions(state = initialState, action) {
  switch (action.type) {
    case actions.COMPETITIONS_UPDATE:
      return {
        ...cloneState(state),
        competitions: action.competitions,
      }

    case actions.COMPETITION_RESULTS_UPDATE: {
      let newState = cloneState(state);
      const id = action.competitionId;
      newState.competitions[id].results = action.results;
      return newState;
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