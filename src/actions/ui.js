import { uiActions } from './action-types';

export function competitionListNextPage() {
  return {
    type: uiActions.COMPETITION_LIST_NEXT_PAGE,
  };
}

export function competitionListPrevPage() {
  return {
    type: uiActions.COMPETITION_LIST_PREV_PAGE,
  };
}