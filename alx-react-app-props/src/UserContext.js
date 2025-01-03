import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// UserProvider component to provide context to children components
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
