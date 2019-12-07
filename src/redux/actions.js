const teamActions = {
    addUser: { type: 'ADD_USER'},
    signIn: { type: 'SIGNIN_USER'},
    signOut: { type: 'SIGN_OUT'},
    logUser: { type: 'LOG_USER'},
    logError: { type: 'LOG_ERROR'},
    postArticle: { type: 'POST_ARTICLE'},
    postGIF: { type: 'POST_GIF'},
    getFeed: { type: 'GET_FEED'},
    newUserSuccess: { type: 'NEWUSER_SUCCESS'},
    newUserFailure: { type: 'NEWUSER_FAILURE'},
    signInSuccess: { type: 'SIGNIN_SUCCESS'},
    signInFailure: { type: 'SIGNIN_FAILURE'},
    newArticleSuccess: { type: 'NEW_ARTICLE_SUCCESS'},
    newArticleFailure: { type: 'NEW_ARTICLE_FAILURE'},
    newGIFSuccess: { type: 'NEW_GIF_SUCCESS'},
    newGIFFailure: { type: 'NEW_GIF_FAILURE'},
    feedSuccess: { type: 'FEED_SUCCESS'},
    feedFailure: { type: 'FEED_FAILURE'},
    }
  
  export default teamActions;