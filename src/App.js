import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Other from './Other.js';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
