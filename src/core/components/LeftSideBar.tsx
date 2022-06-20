import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../../styles/style.css';

const history = createBrowserHistory();

export const LeftBar: React.FC = () => {
  return (
    <div className="left-side-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/car">Автомобили</Link>
        </li>
        <li>
          <Link to="/dashboard">About2</Link>
        </li>
      </ul>

      <hr />

      {/* <Routes>
        <Route path="/" />
        <Route path="/car" element={<Car />} />
        <Route path="/dashboard" element={<About2 />} />
      </Routes> */}
    </div>

    // <div className="left-side-bar">
    //   <ul>
    //     <li>Автомобили</li>
    //   </ul>
    // </div>
  );
};

export const About2: React.FC = () => {
  return <div>About2</div>;
};
