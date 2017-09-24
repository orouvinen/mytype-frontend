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

export function competitionListSetPage(pageNum) {
  return {
    type: uiActions.COMPETITION_LIST_SET_PAGE,
    pageNum,
  };
}