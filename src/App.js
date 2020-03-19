import React, { useRef } from "react";

import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import "./css/main.scss";

function App() {
  let ref = useRef(null);

  const onButtonClick = () => {
    console.log("hello");
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
  };

  return (
    <React.Fragment>
      <div onScroll={onButtonClick} className="container">
        <HomePage function={onButtonClick} />
      </div>

      <div ref={ref} className="container">
        <AboutMe />
      </div>
    </React.Fragment>
  );
}

export default App;
