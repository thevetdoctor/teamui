import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SignOut from './SignOut';
import '../css/App.css';


class Feed extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   items: []
    // }
    this.state = {...this.props.feed};

    this.onEdit = this.onEdit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  onEdit(item) {
    console.log('changing edit status', item);
    let editState = Object.assign({}, this.state);
    let editted = editState['data'].map(x => {
      x.editing = false;
      return x;
    });
    let mapped = editState['data'].map(x => {
      if(item.id === x.id) {
        x.editing = true;
        return x;
      }
      return x;
    });
    console.log(mapped, editted, this.state);
    this.setState(prev => ({ data: mapped }));
  }

  onCancel(item) {
    console.log('changing edit status');
    let editState = Object.assign({}, this.state);
    let mapped = editState['data'].map(x => {
      if(item.id === x.id) {
        x.editing = false;
        return x;
      }
      return x;
    });
    console.log(mapped, this.state);
    this.setState(prev => ({ data: mapped }));
  }

  handleChange({target}) {
    let name = target.name;
    let val = target.value;
    let keyArray = ['title', 'article'];
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
    this.setState(prev => ({ [name]: val }));
  }

  componentDidMount() {
    this.props.onLoad();
  }

  render() {
          let { errorMessage, feed, signedIn, signOut, onUpdate, onDelete } = this.props;
          if(!signedIn) {
            console.log('signedin is true');
          return <Redirect to='/' />
          }
          // if(errorMessage === 'Error with credentials') {
          //   console.log('signedin is true');
          // return <Redirect to='/signin' />
          // }

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
            <div>Articles/GIF posts!</div>
        <div>{feed ?
            <div>{this.state['data'].map((item, index) => (
                <div key={index} className='card'>
                {item.editing ?
                  <div>
                    <span className='cancel btn' onClick={() => this.onCancel(item)}>
                    Cancel</span>
                    <span className='delete update btn' onClick={() => onUpdate({ id: item.id, title: this.state.title, article: this.state.article }) }>
                      Update</span><br />
                    <input type='text' name='title' placeholder={item.title} onChange={this.handleChange} /><br /> 
                    <textarea type='text' name='article' placeholder={item.articleOrUrl} onChange={this.handleChange} />
                  </div>
                  :
                  <div>
                    <span>{!item.articleOrUrl.includes('http') ?  
                    <span className='edit btn' onClick={() => this.onEdit(item)}>Edit</span>
                    :
                    <span></span>}
                    </span>
                    <span className='delete btn' onClick={() => onDelete(item.id)}>
                      Delete</span><br />
                    <span><b>{item.title}</b></span><br />
                    <span>{item.articleOrUrl.includes('http') ? <img src={item.articleOrUrl} alt='gif post' /> : <span>{item.articleOrUrl} </span>}</span>
                  </div>
                  } </div>
            )).reverse()}</div>
            :
            <div></div>
            }
            
            </div>
    </div>
    );
  }
}

export default Feed;
