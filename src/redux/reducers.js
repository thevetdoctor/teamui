/* eslint-disable no-console */
/* eslint-disable no-case-declarations */
import teamActions from './actions';

const initialState = JSON.parse(sessionStorage.getItem('TeamworkDB')) ? JSON.parse(sessionStorage.getItem('TeamworkDB')) :
 {
  name: 'Teamwork!',
  errorMessage: '',
  loading: false,
  user: '',
  signedIn: false,
  isAdmin: false,
  articlePosted: false,
  gifPosted: false,
  tokenDetails: '',
  userDetails: '',
  feed: { data: [] },
};

console.log('sessionStorage: ', JSON.parse(sessionStorage.getItem('TeamworkDB')),  'initialState: ', initialState);

// const initialState = {
//   name: 'Teamwork!',
//   errorMessage: '',
//   loading: false,
//   user: JSON.parse(sessionStorage.getItem('TeamworkDB')) ? JSON.parse(sessionStorage.getItem('TeamworkDB')).user : '',
//   signedIn: JSON.parse(sessionStorage.getItem('TeamworkDB')) ? JSON.parse(sessionStorage.getItem('TeamworkDB')).signedIn : false,
//   isAdmin: JSON.parse(sessionStorage.getItem('TeamworkDB')) ? JSON.parse(sessionStorage.getItem('TeamworkDB')).isAdmin : false,
//   articlePosted: false,
//   gifPosted: false,
//   tokenDetails: JSON.parse(sessionStorage.getItem('TeamworkDB')) ? JSON.parse(sessionStorage.getItem('TeamworkDB')).tokenDetails : '',
//   userDetails: JSON.parse(sessionStorage.getItem('TeamworkDB')) ? JSON.parse(sessionStorage.getItem('TeamworkDB')).userDetails : '',
//   feed: { data: [] },
// };

const teamReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case teamActions.newUserSuccess.type:

      console.log('Getting NEW_USER_DATA from API');
      const { newUserData } = actions;

      console.log(newUserData);
      let newUserState;
      if (newUserData.status === 'error') {
        newUserState = {
          ...state, ...state, newUser: false, errorMessage: newUserData.error,
        };
      } else {
        newUserState = {
          ...state, ...state, newUser: true, signedIn: true,
        };
      }
      sessionStorage.setItem('TeamworkDB', JSON.stringify(newUserState));

      return newUserState;

    case teamActions.newUserFailure.type:
      const { newUserError } = actions;
      console.log('Error response from API', newUserError);
      const newState2 = { ...state };

      return newState2;

    case teamActions.signInSuccess.type:

      console.log('Sign In Response');
      const { signInData } = actions;
      const { isAdmin, token, user } = signInData.data;
      if (isAdmin === null) signInData.data.isAdmin = false;

      console.log(signInData);

      const signedInState = {
        ...state,
        ...state,
        signedIn: true,
        tokenDetails: token,
        isAdmin: signInData.data.isAdmin,
        user,
      };
      // sessionStorage.setItem('TeamworkDB', JSON.stringify(signedInState));
      sessionStorage.setItem('TeamworkDB', JSON.stringify(signedInState));

      return signedInState;

    case teamActions.signInFailure.type:
      // const { signInError } = actions;
      console.log('Error response from API', actions);
      const signedOutState = {
        ...state, ...state, signedIn: false, error: actions.signInError, tokenDetails: '',
      };
      sessionStorage.setItem('TeamworkDB', JSON.stringify(signedOutState));

      return signedOutState;

    case teamActions.signOut.type:
      // const { signInError } = actions;
      console.log('User signed out', actions);
      const signedOut = {
        ...state, ...state, signedIn: false, user: '', isAdmin: false, tokenDetails: '',
      };
      sessionStorage.setItem('TeamworkDB', JSON.stringify(signedOut));

      return signedOut;

    case teamActions.logUser.type:
      const { email } = actions;
      console.log('user email: ', email);
      const newUser = { ...state, ...state, user: email.slice(0, email.indexOf('@')) };
      // sessionStorage.setItem('TeamworkDB', JSON.stringify(newUser));
      sessionStorage.setItem('TeamworkDB', JSON.stringify(newUser));

      return newUser;

    case teamActions.logError.type:
      const { error } = actions;
      console.log('error-message: ', error);
      const newState3 = { ...state, ...state, errorMessage: error };
      sessionStorage.setItem('TeamworkDB', JSON.stringify(newState3));

      return newState3;

    case teamActions.newArticleSuccess.type:

      console.log('Post Article Response');
      const { newArticleData } = actions;

      console.log(newArticleData);
      let newArticleState;
      if (newArticleData.error === 'Error with credentials') {
        newArticleState = {
          ...state,
          ...state,
          articlePosted: false,
          errorMessage: newArticleData.error,
          signedIn: false,
        };
      } else if (newArticleData.status === 'error') {
        newArticleState = {
          ...state, ...state, articlePosted: false, errorMessage: newArticleData.error,
        };
      } else {
        newArticleState = { ...state, ...state, articlePosted: true };
      }
      console.log('new article state', newArticleState);
      sessionStorage.setItem('TeamworkDB', JSON.stringify(newArticleState));

      return newArticleState;

    case teamActions.newArticleFailure.type:
      const { articleError } = actions;
      console.log('Error response from API', actions);
      const failedArticleState = { ...state, ...state, errorMessage: articleError };
      sessionStorage.setItem('TeamworkDB', JSON.stringify(failedArticleState));

      return failedArticleState;

    case teamActions.newGIFSuccess.type:

      console.log('Post GIF Response');
      const { newGIFData } = actions;

      console.log(newGIFData);
      let newGIFState;
      if (newGIFData.status === 'error') {
        newGIFState = {
          ...state, ...state, gifPosted: false, errorMessage: newGIFData.error,
        };
      } else {
        newGIFState = { ...state, ...state, gifPosted: true };
      }
      console.log('new gif state', newGIFState);
      sessionStorage.setItem('TeamworkDB', JSON.stringify(newGIFState));

      return newGIFState;

    case teamActions.newGIFFailure.type:
      const { gifError } = actions;
      console.log('Error response from API', actions);
      const failedGIFState = { ...state, ...state, errorMessage: gifError };
      sessionStorage.setItem('TeamworkDB', JSON.stringify(failedGIFState));

      return failedGIFState;

    case teamActions.feedSuccess.type:

      console.log('Get Feed Response');
      const { feedData } = actions;

      // console.log(feedData);
      let feedState;
      if (feedData.error === 'Error with credentials') {
        feedState = {
          ...state, ...state, errorMessage: feedData.error, signedIn: false,
        };
      } else if (feedData.status === 'error') {
        feedState = { ...state, ...state, errorMessage: feedData.error };
      } else {
        feedState = { ...state, ...state, feed: feedData };
      }
      console.log('new feed state', feedState);
      sessionStorage.setItem('TeamworkDB', JSON.stringify(feedState));

      return feedState;

    case teamActions.feedFailure.type:
      const { feedError } = actions;
      console.log('Error response from API', actions);
      const failedfeedState = { ...state, ...state, errorMessage: feedError };
      sessionStorage.setItem('TeamworkDB', JSON.stringify(failedfeedState));

      return failedfeedState;

    case teamActions.deletePostSuccess.type:

      console.log('Get DELETE POST Response');
      const { deletePostData } = actions;

      console.log(deletePostData);
      let deletePostState;
      if (deletePostData.status === 'error') {
        deletePostState = { ...state, ...state, errorMessage: deletePostData.error };
      } else {
        deletePostState = { ...state, ...state, postDeleted: true };
      }
      console.log('delete post state', true);
      sessionStorage.setItem('TeamworkDB', JSON.stringify(deletePostState));

      return deletePostState;

    case teamActions.deletePostFailure.type:
      const { deletePostError } = actions;
      console.log('Error response from API', actions);
      const failedDeleteState = { ...state, ...state, errorMessage: deletePostError };
      sessionStorage.setItem('TeamworkDB', JSON.stringify(failedDeleteState));

      return failedDeleteState;

    case teamActions.flagPostSuccess.type:

      console.log('Get FLAG POST Response');
      const { flagPostData } = actions;

      console.log(flagPostData);
      let flagPostState;
      if (flagPostData.status === 'error') {
        flagPostState = { ...state, ...state, errorMessage: flagPostData.error };
      } else {
        flagPostState = { ...state, ...state, postFlagged: true };
      }
      console.log('flag post state', true);
      sessionStorage.setItem('TeamworkDB', JSON.stringify(flagPostState));

      return flagPostState;

    case teamActions.flagPostFailure.type:
      const { flagPostError } = actions;
      console.log('Error response from API', actions);
      const failedFlagState = { ...state, ...state, errorMessage: flagPostError };
      sessionStorage.setItem('TeamworkDB', JSON.stringify(failedFlagState));

      return failedFlagState;

    case teamActions.likePostSuccess.type:

      console.log('Get LIKE POST Response');
      const { likePostData } = actions;

      console.log(likePostData);
      let likePostState;
      if (likePostData.status === 'error') {
        likePostState = { ...state, ...state, errorMessage: likePostData.error };
      } else {
        likePostState = { ...state, ...state, postLiked: true };
      }
      console.log('like post state', true);
      sessionStorage.setItem('TeamworkDB', JSON.stringify(likePostState));

      return likePostState;

    case teamActions.likePostFailure.type:
      const { likePostError } = actions;
      console.log('Error response from API', actions);
      const failedLikeState = { ...state, ...state, errorMessage: likePostError };
      sessionStorage.setItem('TeamworkDB', JSON.stringify(failedLikeState));

      return failedLikeState;

    case teamActions.getUserSuccess.type:

      console.log('Get User Details');
      const { userDetailsData } = actions;

      console.log(userDetailsData);
      let userDetailsState;
      if (userDetailsData.error === 'Error with credentials') {
        userDetailsState = { ...state, ...state, errorMessage: userDetailsData.error };
      } else if (userDetailsData.status === 'error') {
        userDetailsState = { ...state, ...state, errorMessage: userDetailsData.error };
      } else {
        userDetailsState = { ...state, ...state, userDetails: userDetailsData.data.userInfo };
      }
      console.log('user details state', userDetailsState);
      sessionStorage.setItem('TeamworkDB', JSON.stringify(userDetailsState));

      return userDetailsState;

    case teamActions.getUserFailure.type:
      const { userDetailsError } = actions;
      console.log('Error response from API', actions);
      const failedUserDetailsState = { ...state, ...state, errorMessage: userDetailsError };
      sessionStorage.setItem('TeamworkDB', JSON.stringify(failedUserDetailsState));

      return failedUserDetailsState;

    default:
      sessionStorage.setItem('TeamworkDB', JSON.stringify(state));

      return state;
  }
};

export default teamReducer;
