import React from "react";
import profile from "../assets/profile.png";
import linkedin from "../assets/linkedin_black.svg";
import github from "../assets/github_black.svg";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="image">
          <img className="profile" src={profile} alt="" />
        </div>
        <div className="h3 about__description">💃 🍜 🥘</div>
        <div className="h1 about__title">about me</div>
        <div className="h3 about__description">Welcome to my website!</div>
        <div className="h3 about__description">
          I'm currently a 2B software engineering student at the University of
          Waterloo.
        </div>
        <div className="h3 about__description">
          Some projects that I've worked on in the past have involved blockchain
          (Hyperledger Indy/Aries), creating different JSON parsing scripts,
          integrating AWS libraries (DynamoDB, EC2, Cognito, IAM, and Lambda),
          and creating integrated React web applications.
        </div>
        <div className="h3 about__description">
          I have a passion for healthcare, and I enjoy dancing and checking out
          restaurants in my spare time!
        </div>
        <div className="h3 about__description">
          Check out the links below for some more information, or to connect.
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
      </div>
    );
  }
}

export default AboutMe;
