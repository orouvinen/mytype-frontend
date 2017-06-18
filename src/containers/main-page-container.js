import React, { Component } from 'react';
import { connect } from 'react-redux';
import CompetitionList from '../components/competition-list';
import SelectedCompetition from '../components/selected-competition';
import paginate from '../containers/paginate';
import { randomText } from '../helpers/typing-test-content-gen';
import * as competitionActions from '../actions/competition';
import * as uiActions from '../actions/ui';
import * as layout from '../three-columns';


class MainPageContainer extends Component {
  createCompetition() {
    this.props.createCompetition("eng", randomText(50));
  }

  render() {
    const PagedCompetitionList =
      paginate(CompetitionList, this.props.ui.competitionListPage, this.props.competitionCount, 10);

    return (
      <div style={layout.layoutWrapper}>
        <div style={layout.leftColumn}>
          <SelectedCompetition {...this.props} />
        </div>
        <div style={layout.centerColumn}>
          <PagedCompetitionList
            onCreateClicked={this.createCompetition.bind(this)}
            {...this.props} />
        </div>
        <div style={layout.rightColumn}></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    competition: state.competition,
    competitionCount: Object.keys(state.competition.competitions).length,
    ui: state.ui,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createCompetition: (language, content) =>
      dispatch(competitionActions.requestCreateCompetition(language, content)),
    selectCompetition: id => dispatch(competitionActions.selectCompetition(id)),
    nextPage: () => dispatch(uiActions.competitionListNextPage()),
    prevPage: () => dispatch(uiActions.competitionListPrevPage()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);