import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';
import '../css/App.css';

class Home extends Component {

  render() {
    let { signedIn, signOut, isAdmin, user } = this.props;
    if(user === 'teamaccess') user = 'Admin';
  return (
    <div className="">
        {signedIn ?
          <div className='nav'>
              {isAdmin ?
              <div>
              <Link to='/createuser' className='links'>Create New Account</Link>
              </div>
              :
              <div></div>
              }
          <Link to='/feed' className='links'>Feed</Link>
          <Link to='/createarticle' className='links'>Create Article</Link>
          <Link to='/postgif' className='links'>Post GIF Images</Link>
          <Link to='/profile' className='links'>Profile</Link>
          <SignOut onClick={signOut} />
          </div>
        :
          <div className='nav'>
          <Link to='/signin' className='links'>Sign In</Link>
          </div>
        }
        <h3>Welcome to Teamwork{user ? `, ${user}` : ', Guest'}</h3>
        <h5>... where teams actually WORK!</h5>
        <img src='https://res.cloudinary.com/thevetdoctor/image/upload/v1574600900/teamwork/Penguins.jpg' alt='Team Bond'/>
    </div>
    );
  }
}

export default Home;
