import React, { useContext } from 'react';
import { UserContext } from '../UserContext'; // Import the UserContext
import UserInfo from './UserInfo'; // Import UserInfo component

function ProfilePage() {
  const { userData } = useContext(UserContext); // Access userData from context
  
  return (
    <div>
      <h1>Profile Page</h1>
      <UserInfo /> {/* No need to pass userData as a prop */}
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default ProfilePage;
