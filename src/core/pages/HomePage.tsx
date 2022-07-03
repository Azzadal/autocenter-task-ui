import { useState } from 'react';
import { LoginPage } from '../auth/AuthPage';

export const HomePage: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const localStorageToken = localStorage.getItem('accessToken');
  return (
    <>
      {localStorageToken !== '' ? (
        <div>Home</div>
      ) : (
        <LoginPage onSubmit={(token) => setToken(token.token)} />
      )}
    </>
  );
};
