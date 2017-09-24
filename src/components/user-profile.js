import React from 'react';
import { layoutWrapper } from '../layout-wrapper';
import colors from '../colors';

const profileWrapper = {
  padding: "5px",
  border: `1px solid ${colors.primary1}`,
  borderRadius: "1px",
  width: "100%",
};

const profileBody = {
  padding: "10px",
};

const UserProfile = ({ user, stats }) => {
  if (!user || !stats) {
    return(
    <div style={layoutWrapper}>
      <div style={profileWrapper}>Fetching user data...</div>
    </div>);
  }

  return (
    <div style={layoutWrapper}>
      <div style={profileWrapper}>
        <h1 className="headerBar">{user.name}</h1>
        <div style={profileBody}>
          <div>WPM: {user.avgWpm.toFixed(1)}</div>
          <div>User position: {stats.topPct}</div>
          <div>Accuracy: {user.avgAcc.toFixed(0)}%</div>
          <div>Typed a total of <strong>{user.numTypingTests}</strong> typing tests.</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
