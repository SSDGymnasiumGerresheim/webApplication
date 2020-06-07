import React from 'react';

class DashboardTemplate extends React.Component {



    render() {
        return ( <
            p id = "templateBox" >
            <
            p id = "BoxOben" > < /p> <
            p id = "Raum" > { this.props.room } < /p> <
            p id = "BoxRand" > < /p> < /
            p >
        );
    }

}

export default DashboardTemplate;