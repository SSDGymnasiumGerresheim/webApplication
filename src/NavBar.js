import React from 'react';
import logo from './logo.svg';

class NavBar extends React.Component {

    render() {
        return ( < div id = "navbar" > <
            table id = "navbar" >
            <
            tr >
            <
            td > < a > < img class = "App-logo"
            src = { logo }
            /></a > < /td> <
            td > < a > + < /a></td >
            <
            td > < a > User < /a></td >
            <
            td > < a > Log < /a></td >
            <
            /tr> < /
            table >
            <
            /div>
        );
    }

}

export default NavBar;