import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SignOut from './SignOut';
import '../css/App.css';

// const errorMessage = useSelector(state => state.errorMessage);

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
  }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
}


handleSubmit (e) {
  e.preventDefault();
  // console.log(this.state);
  // let inputClass = e.target.children[9].classList;
  // console.log(inputClass.toggle('inactive'));
}


handleChange({target}) {
  let name = target.name;
  let val = target.value;
  let keyArray = ['firstName', 'lastName', 'email', 'password', 'gender', 'jobRole', 'department', 'address'];
  if (keyArray.indexOf(name) >= 0) {
  this.setState(prev => ({[name]: ''}));
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
  

  this.setState(prev => ({[name]: val}));
}


render() {
          let { user, signedIn, signOut, onClick } = this.props;
          // console.log(user);
          if(user === 'teamaccess') user = 'Admin';
          if(!signedIn) {
            console.log('signedin is true');
          return <Redirect to='/' />
          }
   return (
    <div className="App">
      <div className='nav'>
        <Link to='/' className='links'>Home</Link>
        <SignOut onClick={signOut} />
        </div>
        <h3>New User Account</h3>
        Please fill in user details
 
        {/* <div>{errorMessage ? <span className='error'>{errorMessage} </span> : <span></span>}</div> */}
 
        <form className='form-selector' onSubmit={this.handleSubmit}>
          <input type='text' name='firstName' placeholder='Enter Firstname' onChange={this.handleChange} />
          <input type='text' name='lastName' placeholder='Enter Lastname' onChange={this.handleChange} />
          <input type='text' name='email' placeholder='Put in Email' onChange={this.handleChange} />
          <input type='password' name='password' placeholder='Enter Password' onChange={this.handleChange} />
          <input type='password' name='password1' placeholder='Re-enter Password' onChange={this.handleChange} />
          <input type='text' name='gender' placeholder='Enter Gender' onChange={this.handleChange} />
          <input type='text' name='jobRole' placeholder="What's the Job Role" onChange={this.handleChange} />
          <input type='text' name='department' placeholder='Which Department' onChange={this.handleChange} />
          <input type='text' name='address' placeholder='Enter Address' onChange={this.handleChange} />
          <input className='submit-inactive' type='submit' name='create-account' value='Create account' onClick={() => onClick(this.state)} />
        </form>
    </div>
    );
  }
}

export default CreateUser;
