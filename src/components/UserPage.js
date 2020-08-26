/* eslint-disable no-console */
import React, { Component } from 'react';
// import { Link, Redirect  } from 'react-router-dom';
// import { FaUniversity, FaComments, FaEdit, FaTelegramPlane } from "react-icons/fa";
// import SignOut from './SignOut';
import '../css/App.css';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { userDetails } = this.props;
    console.log(userDetails);

    return (
      <div className="">
        <h3>
          {userDetails.firstName}
        </h3>

        <div>
          <div>
            {userDetails.firstName}
          </div>
          <div>
            {userDetails.lastName}
          </div>
          <div>
            {userDetails.jobrole}
          </div>
          <div>
            {userDetails.department}
          </div>
          <div>
            {userDetails.address}
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default UserPage;
