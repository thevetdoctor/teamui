/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  FaUserCircle, FaUserPlus, FaEdit, FaComments, FaTelegramPlane, FaArrowCircleRight,
} from 'react-icons/fa';
import SignOut from './SignOut';
import '../css/App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      errorMessage, signedIn, signOut, isAdmin, user,
    } = this.props;
    if (errorMessage === 'Error with credentials') {
      console.log('errorMessage is credentials');
      return <Redirect to="/signin" />;
    }
    return (
      <div className="">
        <div>
        {signedIn
          ? (
            <div className="nav">
              <Link to="/feed" className="links"><FaComments /></Link>
              <Link to="/createarticle" className="links"><FaEdit /></Link>
              <Link to="/postgif" className="links"><FaTelegramPlane /></Link>
              <Link to="/profile" className="links"><FaUserCircle /></Link>
              <Link to="/"><SignOut onClick={signOut} /></Link>
            </div>
          )
          : (
            <div className="nav">
              <Link to="/feed" className="links"><FaComments /></Link>
              <Link to="/createuser" className="links"><FaUserPlus /></Link>
              <Link to="/signin" className="links">
                <FaArrowCircleRight />
              </Link>
            </div>
          )}
          </div>
          <div className='body'>
            <div>
              <img src="https://res.cloudinary.com/thevetdoctor/image/upload/v1574600900/teamwork/Penguins.jpg" alt="Team Bond" />
            </div>
            <div>
              <h3>
                Welcome to Teamwork
                {user.firstname ? `, ${isAdmin ? 'Admin' : user.firstname}` : ', Guest'}
              </h3>
              <h5>... where teams actually WORK!</h5>
            </div>
          </div>
          <div className='footer'>
              Teamwork, ... effective team communication!
          </div>
      </div>
    );
  }
}

export default Home;
