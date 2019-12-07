import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SignOut from './SignOut';
import '../css/App.css';


class Feed extends Component {
    // constructor(props) {
    //     super(props);
    // }


render() {
          let { errorMessage, feed, signedIn, signOut, onLoad } = this.props;
          if(!signedIn) {
            console.log('signedin is true');
          return <Redirect to='/' />
          }
          console.log('signedin is true', feed['data']);
          return (
    <div className="App">
        <div className='nav'>
          {signedIn ?
            <div>
                <Link to='/' className='links'>Home</Link>
                <Link to='/profile' className='links'>Profile</Link>
                <SignOut onClick={signOut} />
            </div>:
            <div>
                <Link to='/signin' className='links'>Sign In</Link>
            </div>
          }
        </div>
        <div>
            {errorMessage ? <span className='error'>{errorMessage} </span> : <span></span>}
        </div>
            <button className='submit-inactive' onClick={() => onLoad()}>Show posts</button>
            <div>Articles/GIF posts!</div>
            <div>{feed['data'].map((item, index) => (
                <div key={index} className='card' onClick={() => {console.log(item.id, index)}}>
                <span>{item.id}</span><br />
                <span>{item.title}</span><br />
                <span>{item.articleOrUrl}</span>
                </div>
            ))}</div>
    </div>
    );
  }
}

export default Feed;
