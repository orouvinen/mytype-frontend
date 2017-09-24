import React from 'react';
import CommonData from './common-data';
import { layoutWrapper } from '../layout-wrapper';
import colors from '../colors';

const profileWrapper = {
  padding: "10px",
  border: `1px solid ${colors.primary1}`,
  borderRadius: "1px",
  width: "100%",
};

const profileBody = {
  fontSize: "1.2em",
  marginTop: "10px",
  color: colors.primary3,
  padding: "10px",
  backgroundColor: colors.complementary1,
  boxShadow: `2px 3px 13px ${colors.primary4}`,
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
          <CommonData heading="Ranking">{stats.topPct}</CommonData>
          <CommonData heading="WPM">{user.avgWpm.toFixed(1)}</CommonData>
          <CommonData heading="Accuracy">{user.avgAcc.toFixed(0)}%</CommonData>
          <CommonData heading="Typing tests typed">{user.numTypingTests}</CommonData>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
