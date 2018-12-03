import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => (
  <div className="dashboard">
    <header>
      <div id="menu">
        <Link to="/dashboard" className="menuitem">Home</Link>
        <Link to="/profile" className="menuitem">Profile</Link>
        <Link to="/entries" className="menuitem">Entries</Link>
        <Link to="/signout" className="menuitem">Sign Out</Link>
      </div>
    </header>
    <div className="center">
      <h1>Hello,</h1>
      <h2>Its me your dear Diary</h2>
      <p>Feel free to pen down your thoughts
        <Link to="/entries/create"> <button type="button">Get Started</button></Link>
      </p>
    </div>
  </div>
);

export default Dashboard;
