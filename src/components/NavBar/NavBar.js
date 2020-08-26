import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserCircle, FaUserPlus, FaEdit, FaComments, FaTelegramPlane, FaArrowCircleRight,
} from 'react-icons/fa';
import { HomeButton, PostsButton } from './NavBarButtons';
import SignOut from './SignOut';

const NavBar = (props) => {
  const { signedIn, isAdmin, signOut } = props;
  return (
    <div className="">
      {signedIn
        ? (
          <div className="nav">
            {isAdmin
              ? (
                <span>
                  <Link to="/createuser" className="links">
                    <FaUserPlus />
                  </Link>
                </span>
              )
              : <span />}
            <Link to="/feed" className="links"><FaComments /></Link>
            <HomeButton />
            <PostsButton />
            <Link to="/createarticle" className="links"><FaEdit /></Link>
            <Link to="/postgif" className="links"><FaTelegramPlane /></Link>
            <Link to="/profile" className="links"><FaUserCircle /></Link>
            <Link to="/"><SignOut onClick={signOut} /></Link>
          </div>
        )
        : (
          <div className="nav">
            <Link to="/feed" className="links"><FaComments /></Link>
            <Link to="/signin" className="links">
              <FaArrowCircleRight />
              {' '}
            </Link>
          </div>
        )}
    </div>
  );
};

export default NavBar;
