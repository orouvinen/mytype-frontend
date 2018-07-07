import { connect } from 'react-redux';
import App from '../components/app';
import * as actions from '../actions/ui';

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        showNotifications: () => dispatch(actions.toggleNotifications()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);