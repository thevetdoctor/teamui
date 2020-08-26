/* eslint-disable no-console */
import React, { useState, useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Input from '../components/widgets/Input';
import Footer from './Footer';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/App.css';

// const notify = () => toast('Wow so easy !');

const CreateArticle = (props) => {
 
  const formState = {
    title: '',
    article: ''
  }

  const [ loading, setLoading ] =  useState(false);
  const [ error, setError ] =  useState('');
  console.log(error);

  const handleSubmit = (e) => {
      console.log(state);
      // dispatch({type: 'CLEAR_FORM'});
      e.preventDefault();
    }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'INPUT':
        let inputKey = action.payload[0];
        let inputValue = action.payload[1];
        let newState = Object.assign({}, state, {
          ...state,
        });
        newState[inputKey] = inputValue;
        // newState.new.push(action.payload);
      return newState;
  
      case 'CLEAR_FORM':
        const newState1 = {
              name: '',
              mortality: '',
              consumption: '', 
              production: '', 
              medication: '',
              };
      return newState1;
  
      default:
      return state;
    }
  }
  
  const [state, dispatch] = useReducer(reducer, formState);

  const handleChange = ({target}) => {
    setLoading(true);
    let name = target.name;
    let val = target.value;
    let keyArray = ['title', 'article'];
    if (keyArray.indexOf(name) >= 0) {
    dispatch({type: 'INPUT', payload: [[name], '']});
    }
    
    console.log('name =>', name, ': value =>', val);
  
    if (val === '' || val.trim() === '') {
      target.classList.add('empty');
      console.log(`${name} is not supplied`);
      setError(`${name} is not supplied`);
      setTimeout(() => {
        setError('');
      }, 3000);
      setLoading(false);
      return;
    }
   
    
    dispatch({type: 'INPUT', payload: [[name], val]});
    setLoading(false);
  }

    const { articlePosted, errorMessage, signedIn, signOut, onClick } = props;

    if (!signedIn) {
      console.log('signedin is false');
      return <Redirect to="/" />;
    }
    // if (articlePosted) {
    //   console.log('article posted');
    //   // notify();
    //   return <Redirect to="/feed" />;
    // }
    return (
      <div className="">
        <NavBar signedIn={signedIn} signOut={signOut} />
        <div>
          {errorMessage ? (
            <span className="error">
              {(typeof errorMessage) !== 'string' ? errorMessage.message : errorMessage}
            </span>
          ) : <span />}
        </div>
        {!loading
          ? (
            <div>
              <h3>Article posted, write another article? </h3>
              {/* <ToastContainer /> */}
            </div>
          )
          : (
            <div>
              {(errorMessage === '' || !loading)
                ? <div><h3>Write & Share</h3></div>
                : <div>Loading.....</div>}
            </div>
          )}

        <form className="form-selector" onSubmit={handleSubmit}>
          <div className="form-div">
            <input type="text" name="title" placeholder="Article Title" onChange={handleChange} />
            <textarea type="text" name="article" placeholder="Your Article" onChange={handleChange} />
            <input className="submit-inactive" type="submit" name="sign-in" value="Post Article" onClick={() => onClick(state)} />
          </div>
        </form>
        <Footer />
      </div>
    );
}

export default CreateArticle;
