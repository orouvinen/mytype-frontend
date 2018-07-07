import { connect } from 'react-redux';
import * as actions from '../actions/ui';
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
    hideNotifications: () => dispatch(actions.toggleNotifications()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
