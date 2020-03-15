import React from 'react';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div> 
                <div className="h1 title"> emily tao </div>
                <div className="h2 description"> developer, engineer, architect </div>
            </div>
        );
    }

}

export default AboutMe;