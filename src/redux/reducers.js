import teamActions from './actions';


// const initialState = JSON.parse(localStorage.getItem('TeamworkDB')) || {
const initialState = {
    name: 'Teamwork!',
    errorMessage: '', 
    loading: false,
    user: '', 
    signedIn: false,
    isAdmin: false,
    articlePosted: false,
    tokenDetails: ''  
}; 

const teamReducer = (state = initialState, actions) => {

  switch(actions.type) {
      case teamActions.newUserSuccess.type:
          
        console.log('Getting NEW_USER_DATA from API');
        let { newUserData } = actions;

        console.log(newUserData);
        let newUserState;
        if(newUserData.status === 'error') {
          newUserState = Object.assign({}, state, {
            ...state, newUser: false, errorMessage: newUserData.error
            });
        } else {
          newUserState = Object.assign({}, state, {
          ...state, newUser: true
          });
        }
        localStorage.setItem('TeamworkDB', JSON.stringify(newUserState));

      return newUserState; 

      case teamActions.newUserFailure.type:
        const { newUserError } = actions;
        console.log('Error response from API', newUserError);
        let newState2 = Object.assign({}, state, {
        });
      
      return newState2;


      case teamActions.signInSuccess.type:
          
        console.log('Sign In Response');
        let { signInData } = actions;
        let { isAdmin, token } = signInData.data;

        console.log(signInData);

          let signedInState = Object.assign({}, state, {
            ...state, signedIn: true, tokenDetails: token, isAdmin
            });
          localStorage.setItem('TeamworkDB', JSON.stringify(signedInState));

      return signedInState;


      case teamActions.signInFailure.type:
        // const { signInError } = actions;
        console.log('Error response from API', actions);
        let signedOutState = Object.assign({}, state, {
          ...state, signedIn: false, tokenDetails: ''
        });
        localStorage.setItem('TeamworkDB', JSON.stringify(signedOutState));
        
      return signedOutState;

      case teamActions.signOut.type:
        // const { signInError } = actions;
        console.log('User signed out', actions);
        let signedOut = Object.assign({}, state, {
          ...state, signedIn: false, isAdmin: false, tokenDetails: ''
        });
        localStorage.setItem('TeamworkDB', JSON.stringify(signedOut));
        
      return signedOut;


      case teamActions.logUser.type:
        const { email } = actions; 
        console.log('user email: ', email);
        let newUser = Object.assign({}, state, {
          ...state, user: email.slice(0, email.indexOf('@')),
        });
        localStorage.setItem('TeamworkDB', JSON.stringify(newUser));
      
      return newUser;

      case teamActions.logError.type:
        const { error } = actions; 
        console.log('error-message: ', error);
        let newState3 = Object.assign({}, state, {
          ...state, errorMessage: error,
        });
        localStorage.setItem('TeamworkDB', JSON.stringify(newState3));
      
      return newState3;


      case teamActions.newArticleSuccess.type:
          
        console.log('Post Article Response');
        let { newArticleData } = actions;

        console.log(newArticleData);
        let newArticleState;
          if(newArticleData.status === 'error') {
            newArticleState = Object.assign({}, state, {
              ...state, articlePosted: false, errorMessage: newArticleData.error
              });
          } else {
            newArticleState = Object.assign({}, state, {
            ...state, articlePosted: true
            });
          }
          console.log('new article state', newArticleState);
          localStorage.setItem('TeamworkDB', JSON.stringify(newArticleState));

      return newArticleState;


      case teamActions.newArticleFailure.type:
        const { articleError } = actions;
        console.log('Error response from API', actions);
        let failedArticleState = Object.assign({}, state, {
          ...state, errorMessage: articleError
        });
        localStorage.setItem('TeamworkDB', JSON.stringify(failedArticleState));
        
      return failedArticleState;
      
      default:
        localStorage.setItem('TeamworkDB', JSON.stringify(state));
    
      return state;
  }
};

export default teamReducer; 