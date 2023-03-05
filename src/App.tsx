import React, { useState } from 'react';
import { QueryClientProvider } from 'react-query';
import { AuthResponse } from './core/auth/auth-service';
import { MainPage } from './core/pages/MainPage';

export const AppContext = React.createContext({ token: 'token' });

function App() {
  return <MainPage />;
}

export default App;
