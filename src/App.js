import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GestorCitas from './components/GestorCitas';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-blue-300 text-center">
      <h1 className="text-5xl font-bold text-sky-700 mb-6">SchenduleONE</h1>
      <p className="text-lg text-gray-700 mb-8">Here I will organize my work </p>
      <Link
        to="/registrar"
        className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded shadow-md transition duration-300"
      >
        Start
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrar" element={<GestorCitas />} />
      </Routes>
    </Router>
  );
}

export default App;
