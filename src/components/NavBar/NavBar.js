import React from 'react';
import { HomeButton, 
  PostsButton,
  CreateUserButton,
  CreateArticleButton, 
  CreateGIFButton, 
  ProfilePageButton, 
  SignInButton, 
  SignOutButton } from './NavBarButtons';

const NavBar = (props) => {
  const { signedIn, signOut } = props;
  return (
    <div className="">
      {signedIn
        ? (
          <div className="nav">
            <HomeButton link='/' className='links' />
            <PostsButton link='/feed' className='links' />
            <CreateArticleButton link='/createarticle' className='links' />
            <CreateGIFButton link='/postgif' className='links' />
            <ProfilePageButton link='/profile' className='links' />
            <SignOutButton link='/' className='links' signOut={signOut} />
          </div>
        )
        : (
          <div className="nav">
            <PostsButton link='/feed' className='links' />
            <CreateUserButton link='/createuser' className='links' />
            <SignInButton link='/signin' className='links' />
          </div>
        )}
    </div>
  );
};

export default NavBar;
