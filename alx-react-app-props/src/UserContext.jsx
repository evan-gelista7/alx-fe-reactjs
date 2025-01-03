// src/UserContext.js
import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a UserProvider component that holds the state
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "Jane Doe", 
    email: "jane.doe@example.com"
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
