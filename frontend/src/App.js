import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';

function App({ themeMode, setThemeMode }) {
  return (
    <div>
      <NavBar themeMode={themeMode} setThemeMode={setThemeMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
