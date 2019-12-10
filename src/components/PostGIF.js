import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SignOut from './SignOut';
import '../css/App.css';


class PostGIF extends Component {

  constructor(props) {
    super(props);
  
   this.state = {
    title: '', 
    // imageUrl: 'C:\\Users\\ACER\\Pictures\\teamwork\\koala.jpg',
    imageUrl: 'C://Users//ACER//Pictures//teamwork//koala.jpg',
  }

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
}


handleSubmit (e) {
  e.preventDefault();
  // let inputClass = e.target.children[2].classList;
  // console.log(e.target.children);
  // console.log(inputClass.toggle('inactive'));
}


handleChange({target}) {
  let name = target.name;
  let val = target.value;
  let keyArray = ['email', 'password'];
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

  

  this.setState(prev => ({[name]: val}));
}


render() {
          let { gifPosted, errorMessage, signedIn, signOut, onClick } = this.props;
          if(!signedIn) {
            console.log('signedin is true');
          return <Redirect to='/' />
          }
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
            {errorMessage ? <span className='error'>{(typeof errorMessage) !== 'string' ? errorMessage.message : errorMessage} </span> : <span></span>}
        </div>
        {gifPosted ?
            <div><h3>Image uploaded, post another image? </h3></div>
        :
            <div><h3>Post GIF images to your team!</h3></div>
        }
 
        <form className='form-selector' onSubmit={this.handleSubmit}>
          <input type='text' name='title' placeholder='GIF Title' onChange={this.handleChange} />
          <input type='file' name='imageUrl' placeholder='Upload GIF' onChange={this.handleChange} />
          <input className='submit-inactive' type='submit' name='post-gif' value='Post GIF' onClick={() => onClick(this.state)} />
        </form>
    </div>
    );
  }
}

export default PostGIF;
