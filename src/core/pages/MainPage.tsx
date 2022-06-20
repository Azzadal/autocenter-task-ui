import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { About2, LeftBar } from '../components/LeftSideBar';
import { TopBar } from '../components/TopBar';
import { CarPage } from './CarPage';
import { HomePage } from './HomePage';

export const MainPage: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="car" element={<CarPage />} />
        </Route>
      </Routes>
    </>
  );
};
