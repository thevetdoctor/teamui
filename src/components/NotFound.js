import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

function Home() {

  return (
    <div className="App">
        <h1>Oop! You missed your way</h1>
        <Link to='/'>Back to Teamwork</Link>
    </div>
  );
}

export default Home;
