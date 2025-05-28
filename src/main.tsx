import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Aircraft from './pages/Aircraft';
import Team from './pages/Team';
import Careers from './pages/Careers';
import './styles/index.css';
import './styles/tokens.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="aircraft" element={<Aircraft />} />
          <Route path="team" element={<Team />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);