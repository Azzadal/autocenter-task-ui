import React from 'react';
import { MainRouter } from './core/pages/MainRouter';

export const AppContext = React.createContext({ token: 'token' });

function App() {
  return <MainRouter />;
}

export default App;
