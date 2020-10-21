import React from 'react';
import './App.css';
import Skills from './Skills';
import SkillsDet from './SkillsDet';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Skills} />
      <Route path='/:id' component={SkillsDet} />
    </Router>
  );
}

export default App;
