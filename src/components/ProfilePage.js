import React, { Component } from 'react';
import { Link, Redirect  } from 'react-router-dom';
import SignOut from './SignOut';
import '../css/App.css';

// const errorMessage = useSelector(state => state.errorMessage);

class ProfilePage extends Component {

  constructor(props) {
    super(props);
  
   this.state = {
     formInput: {
                  firstName: '',
                  lastName: '',
                  email: '', 
                  password: '',
                  gender: '',
                  jobRole: '',
                  department: '',
                  address: '',
                },
              editable: false
}

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.onEdit = this.onEdit.bind(this);
}


onEdit (e) {
  e.preventDefault();
  console.log('editable', this.state.editable);
  this.setState(prev => ({editable: !this.state.editable}));
}

handleSubmit (e) {
  e.preventDefault();
  // console.log(this.state);
  let inputClass = e.target.children[9].classList;
  console.log(inputClass.toggle('inactive'));
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
        const { signedIn, signOut, user, onClick } = this.props;
        // console.log(this.props);
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
        <h3>Welcome to your page, {user}</h3>
 
        {/* <div>{errorMessage ? <span className='error'>{errorMessage} </span> : <span></span>}</div> */}
        {this.state.editable ?
        <div>
          <input type='text' name='firstName' placeholder={user} onChange={this.handleChange} readOnly />
          <input type='text' name='lastName' placeholder={user} onChange={this.handleChange} readOnly />
          <input type='text' name='jobRole' placeholder='current role' onChange={this.handleChange} readOnly />
          <input type='text' name='department' placeholder='current department' onChange={this.handleChange} readOnly />
          <input type='text' name='address' placeholder='current address' onChange={this.handleChange} readOnly /><br />
          <input className='submit-inactive' type='submit' name='edit' value='Edit Profile' onClick={this.onEdit} />
        </div>
        :
        <form className='form-selector'>
          <input type='text' name='firstName' placeholder={user} onChange={this.handleChange} />
          <input type='text' name='lastName' placeholder={user} onChange={this.handleChange} />
          <input type='text' name='jobRole' placeholder='current role' onChange={this.handleChange} />
          <input type='text' name='department' placeholder='current department' onChange={this.handleChange} />
          <input type='text' name='address' placeholder='current address' onChange={this.handleChange} /><br />
          <input style={{backgroundColor: 'red'}} type='submit' name='cancel' value='Cancel' onClick={this.onEdit} />
          <input className='submit-inactive' type='submit' name='update' value='Update' onClick={() => onClick(this.state.formInput)} />
        </form>
        }
    </div>
    );
  }
}

export default ProfilePage;
