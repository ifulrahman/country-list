import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryList from './pages/CountryList';
import CountryDetail from './pages/CountryDetail';
import CooperationList from './pages/CooperationList';
import './index.css';

const App = () => {
  return (
    // Navbar disimpan di luar routes agar tetap muncul pada menu lain
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country/:code" element={<CountryDetail />} />
        <Route path="/cooperation" element={<CooperationList />} />
      </Routes>
    </Router>
  );
};

export default App;