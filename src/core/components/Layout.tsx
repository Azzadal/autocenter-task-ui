import { Select } from 'antd';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../../styles/style.css';
import 'antd/dist/antd.css';

export const Layout: React.FC = () => {
  return (
    <>
      <header>
        <div className="client_card">Карта клиента</div>
        <div className="header_nav">
          <Select className="header_select" defaultValue="Сервис">
            <Select.Option value="1">
              <Link to="trade-in">Trade-In</Link>
            </Select.Option>
            <Select.Option value="1">
              <Link to="service">Обслуживание</Link>
            </Select.Option>
            <Select.Option value="1">Тест-драйв</Select.Option>
          </Select>

          <Select className="header_select" defaultValue="Автомобили">
            <Select.Option value="1">
              <Link to="car-exist">Наличие</Link>
            </Select.Option>
            <Select.Option value="1">2222222222</Select.Option>
            <Select.Option value="1">ssdfsdf</Select.Option>
          </Select>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>

      <footer>2022</footer>
    </>
  );
};
