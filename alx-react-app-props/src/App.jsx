import React from 'react';
import { UserProvider } from './UserContext'; // Correct import path
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
