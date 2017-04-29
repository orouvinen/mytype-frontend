import React from 'react';
import TypingTest from '../containers/typing-test-container';
import * as layout from '../two-columns';

const CompetitionPage = () =>
  <div style={layout.layoutWrapper}>
    <div style={layout.sideBar}>
      {/* result list */}
    </div>

    <div style={layout.mainContent}>
      <TypingTest />
    </div>
  </div>
;
export default CompetitionPage;