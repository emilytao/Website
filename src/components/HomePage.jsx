import React from 'react';
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"

class HomePage extends React.Component {
    render () {
        return (
            <div> 
                <div className="h1 title"> emily tao </div>
                <div className="h2 description"> developer, engineer, architect </div>
                <a href="https://www.linkedin.com/in/emilytao2000/" target="_blank" rel="noopener noreferrer"> <img className="linkedin" src={linkedin} alt="" /></a>
                <a href="https://github.com/emilytao" target="_blank" rel="noopener noreferrer"> <img src={github} alt="" /></a>
            </div>
        );
    }
}

export default HomePage;