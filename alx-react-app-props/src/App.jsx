// src/App.jsx
import React from 'react';
import { UserProvider } from './UserContext';  // Import the UserProvider
import ProfilePage from './components/ProfilePage';  // Import ProfilePage component

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
