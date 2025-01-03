// src/components/UserDetails.jsx (if needed)
import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Import UserContext

function UserDetails() {
  const userData = useContext(UserContext); // Use the context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
