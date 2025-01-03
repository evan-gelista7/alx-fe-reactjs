import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import UserInfo from './UserInfo';

function ProfilePage() {
  const { userData } = useContext(UserContext);

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
