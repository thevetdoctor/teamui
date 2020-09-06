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
  const { home, 
          posts, 
          article, 
          gif, 
          profile, 
          createuser, 
          signin, 
          signout, 
          signedIn, 
          signOut 
        } = props;

  return (
    <div className="">
      {signedIn
        ? (
          <div className="nav">
            {home && <HomeButton link='/' className='links' />}
            {posts && <PostsButton link='/feed' className='links' />}
            {article && <CreateArticleButton link='/createarticle' className='links' />}
            {gif && <CreateGIFButton link='/postgif' className='links' />}
            {profile && <ProfilePageButton link='/profile' className='links' />}
            {signout && <SignOutButton className='links' onClick={signOut} />}
          </div>
        )
        : (
          <div className="nav">
            {home && <HomeButton link='/' className='links' />}
            {createuser && <CreateUserButton link='/createuser' className='links' />}
            {signin && <SignInButton link='/signin' className='links' />}
          </div>
        )}
    </div>
  );
};

export default NavBar;
