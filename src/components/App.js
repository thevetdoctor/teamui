import React from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';
// import App1 from './App1';
// import App2 from './App2';
import CreateUser from './CreateUser';
import '../css/App.css';

function App() {

  const state = store.getState();
  const name = useSelector(state => state.name);
  const errorMessage = useSelector(state => state.errorMessage);
  const users = useSelector(state => state.users);

  console.log(state);

  const handleClick = (formValues) => {
    console.log('input =>', formValues);
    
  const { firstName, lastName, email, password, gender, jobRole, department, address } = formValues;
  
  let usersInState = [ ...users ];
  let userExist = usersInState.filter(user => user['email'] === formValues['email']);
  
  if (userExist.length) {
     let error = 'User exists already';
    
        store.dispatch({
          type: 'LOG_ERROR',
          error,
        });
    return false;
  }
  console.log('user exist', userExist, usersInState);
  console.log(Object.values(formValues));
  let error = '';
  for (let item in formValues) {
      if (formValues[item] === '') {
        console.log('item', item, formValues[item] ? formValues : 'not supplied');
        error = `${item} not supplied!`;
  
        store.dispatch({
          type: 'LOG_ERROR',
          error,
        });
      
        return false;
      }
  
  } 
    let  user = { firstName,
                  lastName,
                  email,
                  password,
                  gender,
                  jobRole,
                  department,
                  address
                };
    let newState = [...state.users, user];
    console.log(newState);
  
    error = '';
    store.dispatch({
          type: 'LOG_ERROR',
          error,
        });
  
     store.dispatch({
        type: 'ADD_USER',
        user,
     });
  
    console.log('submitted', 'newUser =>', user);
  } 


  return (
    <div className="App">
        Welcome to {name}
        {/* <App1 /> */}
        {/* <App2 /> */}
        {errorMessage ? <span className='error'>{errorMessage} </span> : <span></span>}
        <CreateUser onClick={handleClick} />
    </div>
  );
}

export default App;
