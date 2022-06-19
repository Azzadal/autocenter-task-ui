import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MainPage } from '../core/pages/MainPage';

export const MainRouter: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">About2</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/" element={<About2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" />
      </Routes>
    </div>
  );
};

const About: React.FC = () => {
  return <div>About_main</div>;
};

const About2: React.FC = () => {
  return (
    <>
      <Link to="/about">About!!!!!!!</Link>
    </>
  );
};
