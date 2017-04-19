import React from 'react';
import * as layout from '../three-columns';

const MainLayout = props => (
  <div style={layout.mainLayoutWrapper}>
    <div style={layout.leftColumn}>
      <props.route.indexRoute.leftColumn />
    </div>

    <div style={layout.centerColumn}>
      <props.route.indexRoute.centerColumn />
    </div>

    <div style={layout.rightColumn}>
      <div>
        <props.route.indexRoute.rightColumn />
      </div>
    </div>

  </div>
);

export default MainLayout;
