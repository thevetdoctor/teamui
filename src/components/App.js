/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from '../redux/store';
import Home from './Home';
import CreateUser from './CreateUser';
import SignIn from './SignIn';
import NotFound from './NotFound';
import ProfilePage from './ProfilePage';
import UserPage from './UserPage';
import CreateArticle from './CreateArticle';
import PostGIF from './PostGIF';
import Feed from './Feed';
import '../css/App.css';

const App = () => {
  const state = store.getState();
  const {
    loading, signedIn, user, error, isAdmin, errorMessage, articlePosted, gifPosted, feed, userDetails,
  } = useSelector((state) => state);
  console.log(state);

  const handleCreateUser = (formValues) => {
    const {
      firstName, lastName, email, password, gender, jobRole, department, address,
    } = formValues;

    let error = '';
    for (const item in formValues) {
      if (formValues[item] === '') {
        error = `${item} not supplied!`;

        store.dispatch({
          type: 'LOG_ERROR',
          error,
        });

        return false;
      }
    }
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      gender,
      jobRole,
      department,
      address,
    };

    error = '';
    store.dispatch({
      type: 'LOG_ERROR',
      error,
    });

    store.dispatch({
      type: 'ADD_USER',
      newUser,
    });

    console.log('submitted', 'newUser =>', newUser);
  };

  const handleSignIn = (formValues) => {
    const { email, password } = formValues;

    let error = '';
    for (const item in formValues) {
      if (formValues[item] === '') {
        console.log('item', item, formValues[item] ? formValues : 'not supplied');
        error = `${item} not supplied!`;

        store.dispatch({
          type: 'LOG_ERROR',
          error,
        });

        return false;
      }
    }
    const user = {
      email,
      password,
    };
    error = '';
    store.dispatch({
      type: 'LOG_ERROR',
      error,
    });
    store.dispatch({
      type: 'LOG_USER',
      email,
    });

    store.dispatch({
      type: 'SIGNIN_USER',
      user,
    });
  };

  const handleCreateArticle = (formValues) => {
  // notify();

    const { title, article } = formValues;

    let error = '';
    for (const item in formValues) {
      if (formValues[item] === '') {
        console.log('item', item, formValues[item] ? formValues : 'not supplied');
        error = `${item} not supplied!`;

        store.dispatch({
          type: 'LOG_ERROR',
          error,
        });
        return false;
      }
    }
    const newArticle = {
      title,
      article,
    };
    error = '';
    store.dispatch({
      type: 'LOG_ERROR',
      error,
    });

    store.dispatch({
      type: 'POST_ARTICLE',
      newArticle,
    });
  };

  const handlePostGIF = (formValues) => {
    const { title, imageUrl } = formValues;
    let error = '';
    for (const item in formValues) {
      if (formValues[item] === '') {
        console.log('item', item, formValues[item] ? formValues : 'not supplied');
        error = `${item} not supplied!`;

        store.dispatch({
          type: 'LOG_ERROR',
          error,
        });

        return false;
      }
    }
    const gifpost = {
      title,
      imageUrl,
    };
    error = '';
    store.dispatch({
      type: 'LOG_ERROR',
      error,
    });

    store.dispatch({
      type: 'POST_GIF',
      gifpost,
    });
  };

  const handleSignOut = () => {
    console.log('am signing out!');

    store.dispatch({
      type: 'LOG_ERROR',
      error: '',
    });
    store.dispatch({
      type: 'SIGN_OUT',
    });
  };

  const handleDelete = (post) => {
    console.log(isAdmin ? 'Admin' : 'Not admin');
    console.log(`deleting post with ID ${post.id}!`);

    store.dispatch({
      type: 'LOG_ERROR',
      error: '',
    });
    store.dispatch({
      type: 'DELETE_POST',
      post,
    });
  };

  const handleFlag = (post) => {
    console.log(isAdmin ? 'Admin' : 'Not admin');
    console.log(`flagging post with ID ${post.id}!`);

    store.dispatch({
      type: 'LOG_ERROR',
      error: '',
    });
    store.dispatch({
      type: 'FLAG_POST',
      post,
    });
  };

  const handleLike = (post) => {
    console.log(isAdmin ? 'Admin' : 'Not admin');
    console.log(`liking post with ID ${post.id}!`);

    store.dispatch({
      type: 'LOG_ERROR',
      error: '',
    });
    store.dispatch({
      type: 'LIKE_POST',
      post,
    });
  };

  const handleEdit = (postId) => {
    console.log(`editing post with ID ${postId}!`);

    store.dispatch({
      type: 'LOG_ERROR',
      error: '',
    });
    store.dispatch({
      type: 'EDIT_POST',
      postId,
    });
  };

  const handleUserDetails = (userEmail) => {
    console.log(`getting user details by email => ${userEmail}!`);

    store.dispatch({
      type: 'LOG_ERROR',
      error: '',
    });
    store.dispatch({
      type: 'GET_USER',
      userEmail,
    });
  };

  const getFeed = () => {
    console.log('Getting feed!');

    store.dispatch({
      type: 'LOG_ERROR',
      error: '',
    });
    store.dispatch({
      type: 'GET_FEED',
    });
  };

  const handleUpdateArticle = (formValues) => {
    const { id, title, article } = formValues;
    console.log(formValues);
    let error = '';
    for (const item in formValues) {
      if (formValues[item] === '') {
        console.log('item', item, formValues[item] ? formValues : 'not supplied');
        error = `${item} not supplied!`;

        store.dispatch({
          type: 'LOG_ERROR',
          error,
        });
        return false;
      }
    }
    const articleToUpdate = {
      id,
      title,
      article,
    };
    error = '';
    store.dispatch({
      type: 'LOG_ERROR',
      error,
    });

    // console.log(articleToUpdate);

    store.dispatch({
      type: 'UPDATE_ARTICLE',
      articleToUpdate,
    });
  };

  return (
    <Switch>
      <Route path="/" render={(props) => <Home {...props} user={user} isAdmin={isAdmin} signedIn={signedIn} signOut={handleSignOut} />} exact />
      <Route path="/createuser" render={(props) => <CreateUser {...props} loading={loading} signedIn={signedIn} user={user} errorMessage={errorMessage} onClick={handleCreateUser} signOut={handleSignOut} />} />
      <Route path="/signin" render={(props) => <SignIn {...props} error={error} signedIn={signedIn} errorMessage={errorMessage} onClick={handleSignIn} user={user} />} />
      <Route path="/profile" render={(props) => <ProfilePage {...props} signedIn={signedIn} user={user} onClick={handleSignIn} signOut={handleSignOut} />} />
      <Route path="/userpage" render={(props) => <UserPage {...props} signedIn={signedIn} userDetails={userDetails} onClick={handleUserDetails} signOut={handleSignOut} />} />
      <Route path="/createarticle" render={(props) => <CreateArticle {...props} signedIn={signedIn} errorMessage={errorMessage} articlePosted={articlePosted} onClick={handleCreateArticle} signOut={handleSignOut} />} />
      <Route path="/postgif" render={(props) => <PostGIF {...props} signedIn={signedIn} errorMessage={errorMessage} gifPosted={gifPosted} onClick={handlePostGIF} signOut={handleSignOut} />} />
      <Route path="/feed" render={(props) => <Feed {...props} user={user} isAdmin={isAdmin} signedIn={signedIn} errorMessage={errorMessage} signOut={handleSignOut} onLoad={getFeed} feed={feed} onEdit={handleEdit} onUpdate={handleUpdateArticle} onDelete={handleDelete} onFlag={handleFlag} getUserDetails={handleUserDetails} onLike={handleLike} userDetails={userDetails} />} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
