import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';
import '../css/App.css';


class CreateArticle extends Component {

  constructor(props) {
    super(props);
  
   this.state = {
    title: '', 
    article: '',
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
          let { articlePosted, errorMessage, signOut } = this.props;
  return (
    <div className="App">
        <div className='nav'>
          {this.props.signedIn ?
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
            {errorMessage ? <span className='error'>{errorMessage} </span> : <span></span>}
        </div>
        {articlePosted ?
            <div><h3>Article posted, write another article? </h3></div>
        :
            <div><h3>Write & Share</h3></div>
        }
 
        <form className='form-selector' onSubmit={this.handleSubmit}>
          <input type='text' name='title' placeholder='Article Title' onChange={this.handleChange} />
          <textarea type='text' name='article' placeholder='Your Article' onChange={this.handleChange} />
          <input className='submit-inactive' type='submit' name='sign-in' value='Post Article' onClick={() => this.props.onClick(this.state)} />
        </form>
    </div>
    );
  }
}

export default CreateArticle;
