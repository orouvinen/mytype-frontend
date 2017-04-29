import React from 'react';
import { Link } from 'react-router';

const SelectedCompetition = props =>
  <div>
    <Link to="/competition">
        <button className="greenButton" style={{ width: "80%" }}>Join</button>
    </Link>
  </div>
  ;

export default SelectedCompetition;