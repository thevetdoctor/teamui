// import { call, put, take, fork, takeLatest } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects';
import { createNewUser, signInUser } from './api';


function* createUser({type = 'ADD_USER', newUser}) {

   try {
      const newUserData = yield call(createNewUser, newUser);

      yield put({type: 'NEWUSER_SUCCESS', newUserData });
   } catch (e) {
      // console.log(e);
      yield put({type: 'NEWUSER_FAILURE', newUserError: e.message });
   }
}


function* signIn({type = 'SIGNIN_USER', user}) {

   try {

      const signInData = yield call(signInUser, user);

      yield put({type: 'SIGNIN_SUCCESS', signInData });
   } catch (e) {
      // console.log(e);
      yield put({type: 'SIGNIN_FAILURE', signInError: e.message });
   }
}


function* reduxSaga() {

  yield takeLatest("ADD_USER", createUser);

  yield takeLatest("SIGNIN_USER", signIn);

  console.log('we are here');

}

export default reduxSaga;