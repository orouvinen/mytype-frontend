import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedCompetition from '../components/selected-competition';


class SelectedCompetitionContainer extends Component {
  render() {
    return <SelectedCompetition {...this.props}/>
  }
}

function mapStateToProps(state) {
  return {
    competition: state.competition,
  }
}

export default connect(mapStateToProps)(SelectedCompetitionContainer);