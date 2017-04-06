import React from 'react';

const UserProfile = ({ user }) => {
  return(
    <div>
      <h2>{user.name}</h2>
    </div>
  );
};

export default UserProfile;
