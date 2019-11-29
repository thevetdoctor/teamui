import React from 'react';
// import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from '../redux/store';
import Home from './Home';
import CreateUser from './CreateUser'; 
import SignIn from './SignIn';
import NotFound from './NotFound';
// import { handleCreateUser, handleSignIn } from '../functions.js';
import '../css/App.css';


function App() {

const state = store.getState();
console.log(state);


const handleCreateUser = (formValues) => {
  // console.log('input =>', formValues);
  
const { firstName, lastName, email, password, gender, jobRole, department, address } = formValues;

// console.log(Object.values(formValues));
let error = '';
for (let item in formValues) {
    if (formValues[item] === '') {
      // console.log('item', item, formValues[item] ? formValues : 'not supplied');
      error = `${item} not supplied!`;

      store.dispatch({
        type: 'LOG_ERROR',
        error,
      });
    
      return false;
    }

} 
  let  newUser = { firstName,
                lastName,
                email,
                password,
                gender,
                jobRole,
                department,
                address
              };
  let newState = [...state.users, newUser];
  console.log(newState);

  error = '';
  store.dispatch({
        type: 'LOG_ERROR',
        error,
      });

   store.dispatch({
      type: 'ADD_USER',
      newUser,
   });

  console.log('submitted', 'newUser =>', newUser);
}


const handleSignIn = (formValues) => {
  console.log('input =>', formValues);
  
const { email, password } = formValues;

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
  let  user = { email,
                password,
              };
  error = '';
  store.dispatch({
        type: 'LOG_ERROR',
        error,
      });

   store.dispatch({
      type: 'SIGNIN_USER',
      user,
   });

  console.log('signed in', user);
};


  return (
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/createuser' render={(props) => <CreateUser {...props} onClick={handleCreateUser} />} />
      <Route path='/signin' render={(props) => <SignIn {...props} onClick={handleSignIn} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
