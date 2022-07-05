import { Select } from 'antd';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../../styles/style.css';
import 'antd/dist/antd.css';
import { UserInfoTopBar } from '../entities/user/components/user-info';

export const Layout: React.FC = () => {
  return (
    <>
      <header>
        <div className="client_card">
          <Link to="/">Lux auto logo</Link>
        </div>
        <div className="header_nav">
          <Link to="car">Автомобили</Link>
          <Link to="trade-in">Trade-In</Link>
          <Link to="test-drive">Test-drive</Link>
          <Link to="service">Обслуживание</Link>
          <Link to="car-shering">Car-sharing</Link>
        </div>
        <UserInfoTopBar />
      </header>
      <main className="container">
        <Outlet />
      </main>

      <footer>Авто-центр Lux auto 2022 | адрес телефон | соц сети</footer>
    </>
  );
};
