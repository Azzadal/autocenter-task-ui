import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../../styles/style.css';

const history = createBrowserHistory();

export const LeftBar: React.FC = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">About2</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <About2 />
          </Route>
        </Routes>
      </div>
    </Router>
    // <div className="left-side-bar">
    //   <ul>
    //     <li>Автомобили</li>
    //   </ul>
    // </div>
  );
};

const About: React.FC = () => {
  return <div>About</div>;
};

const About2: React.FC = () => {
  return <div>About2</div>;
};
