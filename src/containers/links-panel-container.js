import { connect } from 'react-redux';
import LinksPanel from '../components/links-panel';
import * as authActions from '../actions/auth';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(authActions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksPanel);