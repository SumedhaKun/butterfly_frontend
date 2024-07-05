import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Profile;