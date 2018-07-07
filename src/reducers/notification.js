import { notificationActions as actions } from '../actions/action-types';

const initialState = {
  notifications: [],
}

function notificationsReducer(state = initialState, action) {
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
        };

      case actions.NOTIFICATION_ADD:
        let notifications = state.notifications.slice();
        for (let n of notifications) {
          if (n.user)
            n.user = { ...n.user };
        }

        notifications.push(action.notification);
        return {
          ...state,
          notifications,
        };

    default:
      return state;
  }
}

export default notificationsReducer;
