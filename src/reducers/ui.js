import { uiActions } from '../actions/action-types';

const initialState = {
  competitionListPage: 0,
  notificationsVisible: true,
};

function ui(state = initialState, action) {
  switch (action.type) {
    case uiActions.COMPETITION_LIST_NEXT_PAGE:
      return {
        ...state,
        competitionListPage: state.competitionListPage + 1,
      };

    case uiActions.COMPETITION_LIST_PREV_PAGE:
      return {
        ...state,
        competitionListPage: state.competitionListPage - 1, 
      };

    case uiActions.COMPETITION_LIST_SET_PAGE:
      return {
        ...state,
        competitionListPage: action.pageNum,
      };
    
    case uiActions.TOGGLE_NOTIFICATIONS: 
      return {
        ...state,
        notificationsVisible: !state.notificationsVisible,
      };

    default:
      return state;
  }
}

export default ui;
