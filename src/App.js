import React, { useRef } from "react";

import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import "./css/main.scss";

function App() {
  let ref = useRef(null);

  const onButtonClick = () => {
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
  };

  return (
    <div className="container">
      <HomePage function={onButtonClick} />

      <div ref={ref} className="container">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
