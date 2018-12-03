import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => (
  <div className="dashboard">
    <header>
      <div id="menu">
        <Link to="/" className="menuitem">Home</Link>
        <Link to="/" className="menuitem">Profile</Link>
        <Link to="/" className="menuitem">Entries</Link>
        <Link to="/" className="menuitem">Sign Out</Link>
      </div>
    </header>
    <div className="center">
      <h1>Hello,</h1>
      <h2>Its me your dear Diary</h2>
      <p>Feel free to pen down your thoughts
        <button type="button">Get Started</button>
      </p>
    </div>
  </div>
);

export default Dashboard;
