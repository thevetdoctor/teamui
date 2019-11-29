const teamActions = {
    addUser: { type: 'ADD_USER'},
    signIn: { type: 'SIGNIN_USER'},
    logError: { type: 'LOG_ERROR'},
    loadData: { type: 'LOAD_DATA'},
    getData: { type: 'GET_DATA'},
    loading: { type: 'LOADING'},
    newUserSuccess: { type: 'NEWUSER_SUCCESS'},
    newUserFailure: { type: 'NEWUSER_FAILURE'},
    signInSuccess: { type: 'SIGNIN_SUCCESS'},
    signInFailure: { type: 'SIGNIN_FAILURE'}
    }
  
  export default teamActions;