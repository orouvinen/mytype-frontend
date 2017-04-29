import React from 'react';
import CompetitionList from '../containers/competition-list-container';
import * as layout from '../three-columns';

const MainPage = () =>
  <div style={layout.layoutWrapper}>
    <div style={layout.leftColumn}>
    </div>

    <div style={layout.centerColumn}>
      <CompetitionList />
    </div>

    <div style={layout.rightColumn}>
    </div>
  </div>
;

export default MainPage;