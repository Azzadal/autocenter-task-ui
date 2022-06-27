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
            <Select.Option key={4} value="4">
              <Link to="trade-in">Trade-In</Link>
            </Select.Option>
            <Select.Option key={5} value="5">
              <Link to="service">Обслуживание</Link>
            </Select.Option>
            <Select.Option key={6} value="6">
              Тест-драйв
            </Select.Option>
          </Select>

          <Select className="header_select" defaultValue="Автомобили">
            <Select.Option key={1} value="1">
              <Link to="car">Наличие</Link>
            </Select.Option>
            <Select.Option key={2} value="2">
              2222222222
            </Select.Option>
            <Select.Option key={3} value="3">
              ssdfsdf
            </Select.Option>
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
