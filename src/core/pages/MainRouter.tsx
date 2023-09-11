import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { CarPage } from './CarPage';
import { CarSheringPage } from './CarSheringPage';
import { HomePage } from './HomePage';
import { ServicePage } from './ServicePage';
import { TestDrivePage } from './TestDrivePage';
import { TradeInPage } from './TradeInPage';

export const MainRouter: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="car" element={<CarPage />} />
          <Route path="trade-in" element={<TradeInPage />} />
          <Route path="test-drive" element={<TestDrivePage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="car-shering" element={<CarSheringPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>Здесь ничего нет!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
