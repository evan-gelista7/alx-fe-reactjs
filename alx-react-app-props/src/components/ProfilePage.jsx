import React, { useContext } from 'react';
import { UserContext } from '../UserContext'; // Import the UserContext
import UserInfo from './UserInfo'; // Assuming UserInfo is a child component

function ProfilePage() {
  const { userData } = useContext(UserContext); // Access userData from context

  return (
    <div>
      <h1>Profile Page</h1>
      <UserInfo />
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default ProfilePage;
