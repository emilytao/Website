import React, { useRef } from "react";

import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import './css/main.scss';

function App() {
  let myRef = useRef(null);
  const onButtonClick = () => {
    window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
  };

  return (
    <div className="container">
      <HomePage/>
      <button onClick={onButtonClick}>Focus the input</button>
      
      <AboutMe/> 
      <div ref={myRef}>My Component</div>
    </div> 
  );
}

export default App;

