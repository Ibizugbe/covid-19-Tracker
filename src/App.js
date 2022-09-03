import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import CovidLists from './components/CovidLists';
import DisplayLists from './components/DisplayLists';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<DisplayLists />} />
        <Route exact path="/country/:name" element={<CovidLists />} />
      </Routes>
    </Router>
  );
}

export default App;
