// src/App.jsx
import React from 'react';
import UserContext from './UserContext'; // Import UserContext
import ProfilePage from './components/ProfilePage'; // Import ProfilePage component

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage /> {/* Wrap ProfilePage with UserContext.Provider */}
    </UserContext.Provider>
  );
}

export default App;
