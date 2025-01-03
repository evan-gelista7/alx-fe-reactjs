import React, { useContext } from 'react';
import { UserContext } from '../UserContext'; // Import the UserContext

function UserInfo() {
  const { userData } = useContext(UserContext); // Access userData from context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserInfo;
