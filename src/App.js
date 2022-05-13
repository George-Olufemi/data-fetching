import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Team from './Team.js';
import Other from './Other.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Team />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
