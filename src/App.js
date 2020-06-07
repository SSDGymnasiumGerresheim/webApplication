import React from 'react';
import Login from './pages/Login/login'
import NavBar from './NavBar'
import DashboardTemplate from './pages/dashboard/dashboardTemplate'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <DashboardTemplate/>
    </div>
  );
}

export default App;
