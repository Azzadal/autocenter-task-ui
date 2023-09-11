import { useSelector } from 'react-redux';
import { LoginPage } from '../auth/AuthPage';

export const HomePage: React.FC = () => {
  const st = useSelector((state: any) => state.auth);
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
