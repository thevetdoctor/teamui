/* eslint-disable no-console */
import React from 'react';
import { Redirect } from 'react-router-dom';
import '../css/App.css';
import NavBar from './NavBar/NavBar';
import Footer from './Footer';

const Home = (props) => {
  
    const {
      errorMessage, signedIn, signOut, isAdmin, user,
    } = props;
    
    if (errorMessage === 'Error with credentials') {
      console.log('errorMessage is credentials');
      return <Redirect to="/signin" />;
    }

    return (
      <div className="">
        <NavBar posts article gif profile signin signout createuser signedIn={signedIn} signOut={signOut} />
          <div className='body'>
            <div>
              <img src="https://res.cloudinary.com/thevetdoctor/image/upload/v1574600900/teamwork/Penguins.jpg" alt="Team Bond" />
            </div>
            <div>
              <h3>
                Welcome to Teamwork
                {signedIn ? `, ${isAdmin ? 'Admin' : user.firstname}` : ', Guest'}
              </h3>
              <h5>... where teams actually WORK!</h5>
            </div>
          </div>
         <Footer />
      </div>
    );
}

export default Home;
