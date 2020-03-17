import React from 'react';
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import './css/main.scss';

function App() {
  return (
    <div className="container">
      <HomePage/>
      <AboutMe/> 
    </div> 
  );
}

export default App;

