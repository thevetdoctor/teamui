/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  FaUniversity, FaComments, FaEdit, FaTelegramPlane,
} from 'react-icons/fa';
import SignOut from './SignOut';
import '../css/App.css';

// const errorMessage = useSelector(state => state.errorMessage);

const Input = (props) => (
  <div>
    {props.editable
      ? (
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          readOnly="readonly"
        />
      ) : (
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      )}
  </div>

);

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formInput: {
        firstName: '',
        lastName: '',
        jobRole: '',
        department: '',
        address: '',
      },
      editable: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(e) {
    e.preventDefault();
    console.log('editable', this.state.editable);
    this.setState((prev) => ({ editable: !this.state.editable }));
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    const inputClass = e.target.children[9].classList;
    console.log(inputClass.toggle('inactive'));
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
      signedIn, signOut, user, isAdmin, onClick,
    } = this.props;
    const { editable } = this.state;

    if (!signedIn) {
      console.log('signedin is true');
      return <Redirect to="/" />;
    }
    return (
      <div className="">
        <div className="nav">
          <Link to="/" className="links"><FaUniversity /></Link>
          <Link to="/feed" className="links"><FaComments /></Link>
          <Link to="/createarticle" className="links"><FaEdit /></Link>
          <Link to="/postgif" className="links"><FaTelegramPlane /></Link>
          {' '}
          <Link to="/">
            <SignOut onClick={signOut} />
            {' '}
          </Link>
        </div>
        <h3>
          Welcome to your page,
          {isAdmin ? 'Admin' : user.firstname}
        </h3>

        <form className="form-selector">
          <Input type="text" name="firstName" placeholder={user.firstname} onChange={this.handleChange} editable={!editable} />
          <Input type="text" name="lastName" placeholder={user.lastname} onChange={this.handleChange} editable={!editable} />
          <Input type="text" name="jobRole" placeholder={user.jobrole} onChange={this.handleChange} editable={!editable} />
          <Input type="text" name="department" placeholder={user.department} onChange={this.handleChange} editable={!editable} />
          <Input type="text" name="address" placeholder={user.address} onChange={this.handleChange} editable={!editable} />
          <br />
          {!editable && <input className="submit-inactive" type="submit" name="edit" value="Edit Profile" onClick={this.onEdit} />}
          {editable && <input style={{ backgroundColor: 'red' }} type="submit" name="cancel" value="Cancel" onClick={this.onEdit} />}
          {editable && <input className="submit-inactive" type="submit" name="update" value="Update" onClick={() => onClick(this.state.formInput)} />}
        </form>
      </div>
    );
  }
}

export default ProfilePage;
