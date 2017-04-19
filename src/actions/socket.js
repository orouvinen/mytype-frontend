import { socketActions } from './action-types';

export function updateCompetitionList(competitions) {
  return {
    type: socketActions.COMPETITIONS_UPDATE,
    competitions,
  };
}