import teamActions from './actions';


// const initialState = JSON.parse(localStorage.getItem('TeamworkDB')) || {
const initialState = {
    name: 'Teamwork!',
    errorMessage: '', 
    loading: false,
    user: JSON.parse(sessionStorage.getItem('TeamworkDB')) ? JSON.parse(sessionStorage.getItem('TeamworkDB')).user : '', 
    signedIn: JSON.parse(sessionStorage.getItem('TeamworkDB')) ? JSON.parse(sessionStorage.getItem('TeamworkDB')).signedIn : false,
    isAdmin: JSON.parse(sessionStorage.getItem('TeamworkDB')) ? JSON.parse(sessionStorage.getItem('TeamworkDB')).isAdmin : false,
    articlePosted: false,
    gifPosted: false,
    tokenDetails: JSON.parse(sessionStorage.getItem('TeamworkDB')).tokenDetails || '',
    feed: {data: []}  
}; 
// const initialState = {
//     name: 'Teamwork!',
//     errorMessage: '', 
//     loading: false,
//     user: '', 
//     signedIn: false,
//     isAdmin: false,
//     articlePosted: false,
//     gifPosted: false,
//     tokenDetails: '',
//     feed: {data: []}  
// }; 

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
        if(isAdmin === null) signInData.data.isAdmin = false;

        console.log(signInData);

          let signedInState = Object.assign({}, state, {
            ...state, signedIn: true, tokenDetails: token, isAdmin: signInData.data.isAdmin
            });
          // localStorage.setItem('TeamworkDB', JSON.stringify(signedInState));
          sessionStorage.setItem('TeamworkDB', JSON.stringify(signedInState));

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
          ...state, signedIn: false, user: '', isAdmin: false, tokenDetails: ''
        });
        localStorage.setItem('TeamworkDB', JSON.stringify(signedOut));
        
      return signedOut;


      case teamActions.logUser.type:
        const { email } = actions; 
        console.log('user email: ', email);
        let newUser = Object.assign({}, state, {
          ...state, user: email.slice(0, email.indexOf('@')),
        });
        // localStorage.setItem('TeamworkDB', JSON.stringify(newUser));
        sessionStorage.setItem('TeamworkDB', JSON.stringify(newUser));
      
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


      case teamActions.newGIFSuccess.type:
          
        console.log('Post GIF Response');
        let { newGIFData } = actions;

        console.log(newGIFData);
        let newGIFState;
          if(newGIFData.status === 'error') {
            newGIFState = Object.assign({}, state, {
              ...state, gifPosted: false, errorMessage: newGIFData.error
              });
          } else {
            newGIFState = Object.assign({}, state, {
            ...state, gifPosted: true
            });
          }
          console.log('new gif state', newGIFState);
          localStorage.setItem('TeamworkDB', JSON.stringify(newGIFState));

      return newGIFState;


      case teamActions.newGIFFailure.type:
        const { gifError } = actions;
        console.log('Error response from API', actions);
        let failedGIFState = Object.assign({}, state, {
          ...state, errorMessage: gifError
        });
        localStorage.setItem('TeamworkDB', JSON.stringify(failedGIFState));
        
      return failedGIFState;


      case teamActions.feedSuccess.type:
          
        console.log('Get Feed Response');
        let { feedData } = actions;

        // console.log(feedData);
        let feedState;
          if(feedData.status === 'error') {
            feedState = Object.assign({}, state, {
              ...state, errorMessage: feedData.error
              });
          } else {
            feedState = Object.assign({}, state, {
            ...state, feed: feedData
            });
          }
          console.log('new feed state', feedState);
          localStorage.setItem('TeamworkDB', JSON.stringify(feedState));

      return feedState;


      case teamActions.feedFailure.type:
        const { feedError } = actions;
        console.log('Error response from API', actions);
        let failedfeedState = Object.assign({}, state, {
          ...state, errorMessage: feedError
        });
        localStorage.setItem('TeamworkDB', JSON.stringify(failedfeedState));
        
      return failedfeedState;


      case teamActions.deletePostSuccess.type:
          
        console.log('Get DELETE POST Response');
        let { deletePostData } = actions;

        console.log(deletePostData);
        let deletePostState;
          if(deletePostData.status === 'error') {
            deletePostState = Object.assign({}, state, {
              ...state, errorMessage: deletePostData.error
              });
          } else {
            deletePostState = Object.assign({}, state, {
            ...state, postDeleted: true
            });
          }
          console.log('delete post state', true);
          localStorage.setItem('TeamworkDB', JSON.stringify(deletePostState));

      return deletePostState;


      case teamActions.deletePostFailure.type:
        const { deletePostError } = actions;
        console.log('Error response from API', actions);
        let failedDeleteState = Object.assign({}, state, {
          ...state, errorMessage: deletePostError
        });
        localStorage.setItem('TeamworkDB', JSON.stringify(failedDeleteState));
        
      return failedDeleteState;
      
      default:
        localStorage.setItem('TeamworkDB', JSON.stringify(state));
    
      return state;
  }
};

export default teamReducer; 