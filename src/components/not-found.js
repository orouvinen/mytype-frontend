import React from 'react';
import * as layout from '../three-columns';

const NotFound = () =>
  <div style={layout.layoutWrapper}>
    <div style={layout.centerColumn}>
      <h1 className="headerBar">404</h1>
      <p>The page you requested doesn't exist.</p>
    </div>
  </div>

export default NotFound;
