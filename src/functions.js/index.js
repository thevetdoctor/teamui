// import { useSelector } from 'react-redux';
// import store from '../redux/store';

// // const state = store.getState();
// // const users = useSelector(state => state.users);

// export const handleCreateUser = (formValues) => {
//     console.log('input =>', formValues);
    
//   const { firstName, lastName, email, password, gender, jobRole, department, address } = formValues;
  
//   let usersInState = [ ...users ];
//   let userExist = usersInState.filter(user => user['email'] === formValues['email']);
  
//   if (userExist.length) {
//      let error = 'User exists already';
    
//         store.dispatch({
//           type: 'LOG_ERROR',
//           error,
//         });
//     return false;
//   }
//   console.log('user exist', userExist, usersInState);
//   console.log(Object.values(formValues));
//   let error = '';
//   for (let item in formValues) {
//       if (formValues[item] === '') {
//         console.log('item', item, formValues[item] ? formValues : 'not supplied');
//         error = `${item} not supplied!`;
  
//         store.dispatch({
//           type: 'LOG_ERROR',
//           error,
//         });
      
//         return false;
//       }
  
//   } 
//     let  newUser = { firstName,
//                   lastName,
//                   email,
//                   password,
//                   gender,
//                   jobRole,
//                   department,
//                   address
//                 };
//     let newState = [...state.users, newUser];
//     console.log(newState);
  
//     error = '';
//     store.dispatch({
//           type: 'LOG_ERROR',
//           error,
//         });
  
//      store.dispatch({
//         type: 'ADD_USER',
//         newUser,
//      });
  
//     console.log('submitted', 'newUser =>', newUser);
//   }


//   export const handleSignIn = (formValues) => {
//     console.log('input =>', formValues);
    
//   const { email, password } = formValues;
  
//   console.log(Object.values(formValues));
//   let error = '';
//   for (let item in formValues) {
//       if (formValues[item] === '') {
//         console.log('item', item, formValues[item] ? formValues : 'not supplied');
//         error = `${item} not supplied!`;
  
//         store.dispatch({
//           type: 'LOG_ERROR',
//           error,
//         });
      
//         return false;
//       }
  
//   } 
//     let  user = { email,
//                   password,
//                 };
//     error = '';
//     store.dispatch({
//           type: 'LOG_ERROR',
//           error,
//         });
  
//      store.dispatch({
//         type: 'SIGNIN_USER',
//         user,
//      });
  
//     console.log('signed in', user);
//   };