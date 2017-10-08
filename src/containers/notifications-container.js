import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from '../components/notifications';



function mapStateToProps(state) {
  return {
    notifications: state.notification,
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);