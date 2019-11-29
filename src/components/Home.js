import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

function Home() {

  return (
    <div className="App">
        <Link to='/createuser' className='links'>Create New Account</Link>
        <Link to='/signin' className='links'>Sign In</Link>
        <Link to='/profile' className='links'>Profile</Link>
        <h1>Welcome to Teamwork</h1>
        <h3>... where teams actually WORK!</h3>
        <img src='https://res.cloudinary.com/thevetdoctor/image/upload/v1574600900/teamwork/Penguins.jpg' alt='Team Bond'/>
    </div>
  );
}

export default Home;
