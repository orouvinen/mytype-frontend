import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompetitionList from '../components/competition-list';

class CompetitionListContainer extends Component {
  createCompetition() {
    console.log("createCompetition"); 
  }
  render() {
    return (
        <CompetitionList onCreateClicked={this.createCompetition.bind(this)}/>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(CompetitionListContainer);
