import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="home"> 
                <div className="h1 title"> emily tao </div>
                <div className="h2 description"> developer, engineer, architect </div>
            </div>
        );
    }
}

export default HomePage;