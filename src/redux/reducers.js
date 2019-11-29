import teamActions from './actions';


const initialState = JSON.parse(localStorage.getItem('TeamworkDB')) || {
// const initialState = {
    name: 'Teamwork!',
    errorMessage: '', 
    formView: true, 
    loading: false,  
    users: [
        {firstname: 'Oba',  
        lastname: 'Ode',
        email: 'oba@teamwork.com',
        password: 'obapass',
        gender: 'M',
        jobRole: 'Director',
        department: 'admin',
        address: 'Hqtrs'
        },
           
        {firstname: 'Toke',
        lastname: 'Ode',
        email: 'oba@teamwork.com',
        password: 'oyepass',
        gender: 'F',
        jobRole: 'MD',
        department: 'admin',
        address: 'Hqtrs'        
      }]
}; 

const teamReducer = (state = initialState, actions) => {

  switch(actions.type) {
  case teamActions.newUserSuccess.type:
      
    console.log('Getting NEW_USER_DATA from API');
    let { newUserData } = actions;

    console.log(newUserData);

      let newUserList = [ ...state.users ];
          newUserList.push(actions.newUserData);

      let newState = Object.assign({}, state, {
        ...state, users: newUserList,
        });
      localStorage.setItem('TeamworkDB', JSON.stringify(newState));

  return newState; 

  case teamActions.newUserFailure.type:
    const { newUserError } = actions;
    console.log('Error response from API', newUserError);
    let newState2 = Object.assign({}, state, {
    });
   
  return newState2;


  case teamActions.signInSuccess.type:
      
    console.log('Sign In Response');
    let { signInData } = actions;
    let { token } = signInData.data;

    console.log(signInData);

      let signedInState = Object.assign({}, state, {
        ...state, signedIn: true, tokenDetails: token,
        });
      localStorage.setItem('TeamworkDB', JSON.stringify(signedInState));
      console.log('kk', JSON.parse(localStorage.getItem('TeamworkDB')));

  return signedInState;


  case teamActions.signInFailure.type:
    // const { signInError } = actions;
    console.log('Error response from API', actions);
    let signedOutState = Object.assign({}, state, {
      ...state, signedIn: false, tokenDetails: ''
    });
    
  return signedOutState;


  case teamActions.logError.type:
    const { error } = actions; 
    console.log('error-message: ', error);
    let newState3 = Object.assign({}, state, {
      ...state, errorMessage: error,
    });
    localStorage.setItem('TeamworkDB', JSON.stringify(newState3));
  
  return newState3;
  
  default:
    localStorage.setItem('TeamworkDB', JSON.stringify(state));
 
  return state;
  }
};

export default teamReducer; 