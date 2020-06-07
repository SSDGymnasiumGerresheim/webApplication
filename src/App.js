import React from 'react';
import Login from './pages/Login/login'
import NavBar from './NavBar'
import Dashboard from './pages/dashboard/dashboard'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return ( <
        Router >
        <
        Route exact path = "/"
        component = { Dashboard }
        />< /
        Router >
    );
}

export default App;