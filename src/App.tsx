import React, { useState } from 'react';
import { AuthResponse } from './core/auth/auth-service';
import { MainPage } from './core/pages/MainPage';

export const AppContext = React.createContext({ token: 'token' });

function App() {
  const [token, setToken] = useState<AuthResponse>({ token: 'token' });

  return (
    <AppContext.Provider value={token}>
      <MainPage />
    </AppContext.Provider>
  );
}

export default App;
