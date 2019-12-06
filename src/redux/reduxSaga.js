// import { call, put, take, fork, takeLatest } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects';
import { createNewUser, signInUser, postArticle } from './api';


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


function* postNewArticle({type = 'POST_ARTICLE', newArticle}) {

   try {

      const newArticleData = yield call(postArticle, newArticle);

      yield put({type: 'NEW_ARTICLE_SUCCESS', newArticleData });
   } catch (e) {
      // console.log(e);
      yield put({type: 'NEW_ARTICLE_FAILURE', articleError: e.message });
   }
}


function* reduxSaga() {

  yield takeLatest("ADD_USER", createUser);

  yield takeLatest("SIGNIN_USER", signIn);

  yield takeLatest("POST_ARTICLE", postNewArticle);

  console.log('Redux Saga is on!');

}

export default reduxSaga;