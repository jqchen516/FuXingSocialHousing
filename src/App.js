import './App.css';
import React from 'react';
import KioskPage from './pages/Kiosk';
import { BoardPage } from './pages/BoardPage';
import { KioskNavBar } from './component/navbar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/base.scss'
import './assets/scss/footer.scss'
import './assets/scss/header.scss'
import './assets/scss/index.scss'
import './assets/scss/mixin.scss'
import './assets/scss/variables.scss'

function Main() {
  return (
    <div>
      <a href="https://fb.com" target="_blank" rel="noopener noreferrer">
        <button>Hypelink</button>
      </a>
      <div>
        <Link to="/board">
          <button>Dashboard</button>
          {/* <button onClick={Dashboard}>dashboard</button> */}
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
    <KioskNavBar />
    <KioskPage />
      <Router>
        <Routes>
          <Route exact path="/board" element={<BoardPage />} />
          <Route exact path="/kiosk" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
