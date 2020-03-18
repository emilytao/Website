import React from "react";
import linkedin from "../assets/linkedin_white.svg";
import github from "../assets/github_white.svg";
import down_arrow from "../assets/down_arrow.svg";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="h1 home__title">emily tao</div>
        <div className="h2 home__description">
          developer, engineer, designer
        </div>
        <a
          href="https://www.linkedin.com/in/emilytao2000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon linkedin" src={linkedin} alt="" />
        </a>
        <a
          href="https://github.com/emilytao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon" src={github} alt="" />
        </a>
        <div className="arrow">
          <img src={down_arrow} onClick={this.props.function} />
        </div>
      </div>
    );
  }
}

export default HomePage;
