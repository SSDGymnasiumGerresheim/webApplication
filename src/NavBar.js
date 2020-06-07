import React from 'react';
import logo from './logo.svg';

class NavBar extends React.Component{

    render(){
        return(
            <table id="navbar">
                <tr>
                    <td><a><image href={logo}/></a></td>
                    <td><a>+</a></td>
                    <td><a>User</a></td>
                    <td><a>Log</a></td>
                </tr>
            </table>
        );
    }

}

export default NavBar;