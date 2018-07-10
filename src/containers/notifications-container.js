import { connect } from 'react-redux';
import * as uiActions from '../actions/ui';
import * as actions from '../actions/notifications';
import Notifications from '../components/notifications';

function mapStateToProps(state) {
  return {
    notifications: state.notification.notifications,
    visible: state.ui.notificationsVisible,
    user: state.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideNotifications: () => dispatch(uiActions.toggleNotifications()),
    acknowledge: notificationIds => dispatch(actions.acknowledge(notificationIds)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
