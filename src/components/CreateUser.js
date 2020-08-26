/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUniversity, FaArrowCircleRight } from 'react-icons/fa';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';
import SignOut from './SignOut';
import '../css/App.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      jobRole: '',
      department: '',
      address: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  // console.log(this.state);
  // let inputClass = e.target.children[9].classList;
  // console.log(inputClass.toggle('inactive'));
  }

  handleChange({ target }) {
    const { name } = target;
    const val = target.value;
    const keyArray = ['firstName', 'lastName', 'email', 'password', 'gender', 'jobRole', 'department', 'address'];
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
    if (name === 'age') {
      if (isNaN(val)) {
        target.classList.add('empty');
        console.log(`${name} should be a number!`);
        // return;
      }
    }

    this.setState((prev) => ({ [name]: val }));
  }

  render() {
    const {
      user, signedIn, signOut, onClick, loading,
    } = this.props;
    let username;
    if (user === 'teamaccess') username = 'Admin';
    console.log(username);
    return (
      <div className="">
        <div className="nav">
          <Link to="/" className="links"><FaUniversity /></Link>
          <span>
            {signedIn
              ? (
                <Link to="/">
                  <SignOut onClick={signOut} />
                  {' '}
                </Link>
              )
              : <Link to="/signin" className="links"><FaArrowCircleRight /></Link>}
          </span>
        </div>
        <h3>New User Account</h3>
        Please fill in user details

        <form className="form-selector" onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" placeholder="Enter Firstname" onChange={this.handleChange} />
          <input type="text" name="lastName" placeholder="Enter Lastname" onChange={this.handleChange} />
          <input type="text" name="email" placeholder="Put in Email" onChange={this.handleChange} />
          <input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
          <input type="password" name="password1" placeholder="Re-enter Password" onChange={this.handleChange} />
          <input type="text" name="gender" placeholder="Enter Gender" onChange={this.handleChange} />
          <input type="text" name="jobRole" placeholder="What's the Job Role" onChange={this.handleChange} />
          <input type="text" name="department" placeholder="Which Department" onChange={this.handleChange} />
          <input type="text" name="address" placeholder="Enter Address" onChange={this.handleChange} />
          <div>
            {!loading
              ? <input className="submit-inactive" type="submit" name="create-account" value="Create account" onClick={() => onClick(this.state)} />
              : (
                <BeatLoader
                  css={override}
                  size={30}
                // color={"#123abc"}
                  loading={loading}
                />
              )}
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
