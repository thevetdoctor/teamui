/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FaUniversity, FaUserPlus } from 'react-icons/fa';
import '../css/App.css';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  // let inputClass = e.target.children[2].classList;
  // console.log(e.target.children);
  // console.log(inputClass.toggle('inactive'));
  }

  handleChange({ target }) {
    const { name } = target;
    const val = target.value;
    const keyArray = ['email', 'password'];
    if (keyArray.indexOf(name) >= 0) {
      this.setState((prev) => ({ [name]: '' }));
    }
    // console.log('name =>', name, ': value =>', val);

    if (name === 'undefined' || name === undefined) {
    // console.log('name is undefined', 'target =>', target.parentNode, 'val =>', val);
      return;
    }
    if (val === '' || val.trim() === '') {
      target.classList.add('empty');
      // console.log(`${name} is not supplied`);
      return;
    }
    this.setState((prev) => ({ [name]: val }));
  }

  render() {
    let {
      signedIn, errorMessage, onClick, user,
    } = this.props;
    if (signedIn) {
      console.log('SignIn: signedin is true');
      return <Redirect to="/" />;
      // return this.history.push('/');
    }
    if (errorMessage.includes('undefined')) {
      console.log('Back to sign in');
      return <Redirect to="/signin" />;
    }
    if (errorMessage.includes('credentials')) errorMessage = 'Error found!';
    if (!signedIn && (user !== 'Guest')) user = 'Guest';

    return (
      <div className="">
        <div className="nav">
          <Link to="/" className="links"><FaUniversity /></Link>
          <Link to="/createuser" className="links"><FaUserPlus /></Link>
        </div>
        <h3>Log In</h3>

        <div>
          {errorMessage ? (
            <span className="error">
              {errorMessage}
            </span>
          ) : <span />}
        </div>
        {/* <div>{error && error.includes('undefined') ? <span>Login failed </span> : <span />}</div> */}
        {/* <div>{ errorMessage }</div> */}

        <form className="form-selector" onSubmit={this.handleSubmit}>
          <input type="text" name="email" placeholder="Put in Email" onChange={this.handleChange} />
          <input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
          <input className="submit-inactive" type="submit" name="sign-in" value="Sign In" onClick={() => onClick(this.state)} />
        </form>
      </div>
    );
  }
}

export default SignIn;
