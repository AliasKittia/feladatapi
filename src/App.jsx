import React from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import TipusokList from './TipusokList';
import TipusDetails from './TipusDetails';
import NewTipus from './NewTipus';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tipusok">Tipusok</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ujtipus">Új Tipus</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tipusok" element={<TipusokList />} />
        <Route path="/tipusok/:id" element={<TipusDetails />} />
        <Route path="/ujtipus" element={<NewTipus />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return <div>Home Page</div>;
}

export default App;
