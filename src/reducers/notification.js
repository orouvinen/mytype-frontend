import { notificationActions as actions } from '../actions/action-types';

const initialState = {
  notifications: [],
}

function notifications(state = initialState, action) {
  switch(action.type) {
    case actions.NOTIFICATION_ACKNOWLEDGE_SUCCESS:
      return {
        ...state,
        notifications: state.notifications
          .filter(n => n !== action.notificationId)
      }
    
      case actions.NOTIFICATION_LOAD_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.notifications,
      }
    default:
      return state;
  }
}

export default notifications;