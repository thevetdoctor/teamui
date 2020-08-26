/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  FaUniversity, FaComments, FaTelegramPlane, FaUserCircle,
} from 'react-icons/fa';
// import NavBar from './NavBar/NavBar';
// import { ToastContainer, toast } from 'react-toastify';
import SignOut from './SignOut';
import 'react-toastify/dist/ReactToastify.css';
import '../css/App.css';

// const notify = () => toast('Wow so easy !');

class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      article: '',
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
  // this.setState(prev => ({ title: '888', article: '999' }))
  // let inputClass = e.target.children[2].classList;
  // console.log(e.target.children);
  // console.log(inputClass.toggle('inactive'));
  }

  handleChange({ target }) {
    const { name } = target;
    const val = target.value;
    const keyArray = ['title', 'article'];
    if (keyArray.indexOf(name) >= 0) {
      this.setState((prev) => ({ [name]: '' }));
    }
    // console.log('name =>', name, ': value =>', val);

    if (name === 'undefined' || name === undefined) {
      console.log('name is undefined', 'target =>', target.parentNode, 'val =>', val);
      return;
    }
    if (val === '' || val.trim() === '') {
      target.classList.add('empty');
      console.log(`${name} is not supplied`);
      return;
    }

    this.setState((prev) => ({ [name]: val }));
  }

  render() {
    const {
      articlePosted, errorMessage, signedIn, signOut, onClick,
    } = this.props;
    const { loading } = this.state;
    if (!signedIn) {
      console.log('signedin is false');
      return <Redirect to="/" />;
    }
    // if (articlePosted) {
    //   console.log('article posted');
    //   // notify();
    //   return <Redirect to="/feed" />;
    // }
    return (
      <div className="">
        {/* <NavBar signedIn={signedIn} /> */}
        <div className="nav">
          {signedIn ? (
            <div>
              <Link to="/" className="links"><FaUniversity /></Link>
              <Link to="/feed" className="links"><FaComments /></Link>
              <Link to="/postgif" className="links"><FaTelegramPlane /></Link>
              <Link to="/profile" className="links"><FaUserCircle /></Link>
              <Link to="/">
                <SignOut onClick={signOut} />
                {' '}
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/signin" className="links">Sign In</Link>
            </div>
          )}
        </div>
        <div>
          {errorMessage ? (
            <span className="error">
              {(typeof errorMessage) !== 'string' ? errorMessage.message : errorMessage}
              {' '}
            </span>
          ) : <span />}
        </div>
        {articlePosted
          ? (
            <div>
              <h3>Article posted, write another article? </h3>
              {/* <ToastContainer /> */}
            </div>
          )
          : (
            <div>
              {(errorMessage === '' || !loading)
                ? <div><h3>Write & Share</h3></div>
                : <div>Loading.....</div>}
            </div>
          )}

        <form className="form-selector" onSubmit={this.handleSubmit}>
          <div className="form-div">
            <input type="text" name="title" placeholder="Article Title" onChange={this.handleChange} />
            <textarea type="text" name="article" placeholder="Your Article" onChange={this.handleChange} />
            <input className="submit-inactive" type="submit" name="sign-in" value="Post Article" onClick={() => onClick(this.state)} />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateArticle;
