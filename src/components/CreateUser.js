import React, { Component } from 'react';
import '../css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
  
   this.state = {
    firstname: '',
    lastname: '',
    birthday: '', 
    age: '',
    hobby: '',
  }

   this.handleChange = this.handleChange.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
}




handleChange({target}) {
  let name = target.name;
  let val = target.value;
  let keyArray = ['firstname', 'lastname', 'birthday', 'age', 'hobby'];
  if (name === undefined) {
  this.setState(prev => ({birthday: ''}));
  }
  if (keyArray.indexOf(name) >= 0) {
  this.setState(prev => ({[name]: ''}));
  }
  console.log('name =>', name, ': value =>', val);

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
  
if (name === '') {
  this.setState(prev => ({birthday: val}));
  return;
}
  this.setState(prev => ({[name]: val}));
}


render() {

  return (
    <div className="App">
        <a href='/'>Back</a>
        <a href='/api/v1/docs'>Documentation</a>
        <h3>New User Account</h3>
        Please fill in user details

        <form className='form-selector'>
          <input type='text' name='firstName' placeholder='Firstname' />
          <input type='text' name='lastName' placeholder='Lastname' />
          <input type='text' name='email' placeholder='Email' />
          <input type='text' name='password' placeholder='Password' />
          <input type='text' name='gender' placeholder='Gender' />
          <input type='text' name='jobRole' placeholder='Job Role' />
          <input type='text' name='department' placeholder='Department' />
          <input type='text' name='address' placeholder='Address' />
          <input type='submit' name='Create' value='Create' />
        </form>
    </div>
    );
  }
}

export default App;
