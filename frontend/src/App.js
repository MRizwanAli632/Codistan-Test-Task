// Entry point for React 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParentPage from './pages/ParentPage';
import ChildPage from './pages/ChildPage';
function App() { // defining routes
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ParentPage />} />
        <Route path="/parents/:id" element={<ChildPage />} />
      </Routes>
    </Router>
  );
}

export default App;
