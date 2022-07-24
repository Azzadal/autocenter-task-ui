import { useState } from 'react';
import { LoginPage } from '../auth/AuthPage';

export const HomePage: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const localStorageToken = localStorage.getItem('accessToken');

  return (
    <>
      {localStorageToken ? (
        <div className="home_page">
          <h1 style={{ fontFamily: 'inherit' }}>
            Добро пожаловать на сайт автоцентра LUX auto
          </h1>
          <div className="promo">Акция месяца - скидка 20% на плановое ТО</div>
        </div>
      ) : (
        <LoginPage onSubmit={(token) => setToken(token.token)} />
      )}
    </>
  );
};
