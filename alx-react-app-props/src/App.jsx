import React from 'react';
import { UserProvider } from './UserContext'; // Import the UserProvider
import ProfilePage from './components/ProfilePage'; // Assuming ProfilePage is your main component

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
