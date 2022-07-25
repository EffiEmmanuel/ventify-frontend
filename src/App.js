import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Waitlist from './components/Waitlist';

function App() {
  return (
    <React.Fragment>
        <Routes>
          {/* Waitlist page route */}
          <Route path='/' element={<Waitlist />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
