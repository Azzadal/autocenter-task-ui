import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authservice } from '../auth/auth-service';
import { LoginPage } from '../auth/AuthPage';

export const HomePage: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const st = useSelector((state: any) => state.auth);
  const localStorageToken = localStorage.getItem('accessToken');

  return (
    <>
      {st.isAuthenticated ? (
        <div className="home_page">
          <h1 style={{ fontFamily: 'inherit' }}>
            Добро пожаловать на сайт автоцентра LUX auto
          </h1>
          <div className="promo">Акция месяца - скидка 20% на плановое ТО</div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};
