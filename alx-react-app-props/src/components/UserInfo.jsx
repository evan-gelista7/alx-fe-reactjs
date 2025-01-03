// src/components/UserInfo.jsx
import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Import UserContext

function UserInfo() {
  const userData = useContext(UserContext); // Use the context to get userData

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserInfo;
