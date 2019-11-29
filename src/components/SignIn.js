import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';

// const errorMessage = useSelector(state => state.errorMessage);

class SignIn extends Component {

  constructor(props) {
    super(props);
  
   this.state = {
    email: '', 
    password: '',
  }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
}


handleSubmit (e) {
  e.preventDefault();
  let inputClass = e.target.children[2].classList;
  // console.log(e.target.children);
  console.log(inputClass.toggle('inactive'));
}


handleChange({target}) {
  let name = target.name;
  let val = target.value;
  let keyArray = ['email', 'password'];
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

  

  this.setState(prev => ({[name]: val}));
}


render() {

  return (
    <div className="App">
        <Link to='/' className='links'>Back to Teamwork</Link>
        <h3>Sign In</h3>
 
        {/* <div>{errorMessage ? <span className='error'>{errorMessage} </span> : <span></span>}</div> */}
 
        <form className='form-selector' onSubmit={this.handleSubmit}>
          <input type='text' name='email' placeholder='Put in Email' onChange={this.handleChange} />
          <input type='password' name='password' placeholder='Enter Password' onChange={this.handleChange} />
          <input className='submit-inactive' type='submit' name='sign-in' value='Sign In' onClick={() => this.props.onClick(this.state)} />
        </form>
    </div>
    );
  }
}

export default SignIn;
