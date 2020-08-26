// import { call, put, take, fork, takeLatest } from 'redux-saga/effects';
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import { call, put, takeLatest } from 'redux-saga/effects';
import {
  createNewUser,
  signInUser,
  postArticle,
  postGIF,
  getAllFeed,
  deletePost,
  flagPost,
  likePost,
  updatePost,
  getUserDetails,
} from './api';

function* createUser({ type = 'ADD_USER', newUser }) {
  try {
    const newUserData = yield call(createNewUser, newUser);

    yield put({ type: 'NEWUSER_SUCCESS', newUserData });
  } catch (e) {
    // console.log(e);
    yield put({ type: 'NEWUSER_FAILURE', newUserError: e.message });
  }
}

function* signIn({ type = 'SIGNIN_USER', user }) {
  try {
    const signInData = yield call(signInUser, user);

    yield put({ type: 'SIGNIN_SUCCESS', signInData });
  } catch (e) {
    // console.log(e);
    yield put({ type: 'SIGNIN_FAILURE', signInError: e.message });
  }
}

function* postNewArticle({ type = 'POST_ARTICLE', newArticle }) {
  try {
    const newArticleData = yield call(postArticle, newArticle);

    yield put({ type: 'NEW_ARTICLE_SUCCESS', newArticleData });
  } catch (e) {
    // console.log(e);
    yield put({ type: 'NEW_ARTICLE_FAILURE', articleError: e.message });
  }
}

function* postNewGIF({ type = 'POST_GIF', gifpost }) {
  try {
    const newGIFData = yield call(postGIF, gifpost);

    yield put({ type: 'NEW_GIF_SUCCESS', newGIFData });
  } catch (e) {
    // console.log(e);
    yield put({ type: 'NEW_GIF_FAILURE', gifError: e.message });
  }
}

function* gettingFeed({ type = 'GET_FEED' }) {
  try {
    const feedData = yield call(getAllFeed);

    yield put({ type: 'FEED_SUCCESS', feedData });
  } catch (e) {
    // console.log(e);
    yield put({ type: 'FEED_FAILURE', feedError: e.message });
  }
}

function* gettingUserDetails({ type = 'GET_USER', userEmail }) {
  try {
    const userDetailsData = yield call(getUserDetails, userEmail);

    yield put({ type: 'GET_USER_SUCCESS', userDetailsData });
  } catch (e) {
    // console.log(e);
    yield put({ type: 'GET_USER_FAILURE', userDetailsError: e.message });
  }
}

function* deletingPost({ type = 'DELETE_POST', post }) {
  try {
    console.log(post.id);

    const deletePostData = yield call(deletePost, post);

    if (deletePostData) {
      const feedData = yield call(getAllFeed);
      yield put({ type: 'FEED_SUCCESS', feedData });
    }

    // yield put({type: 'DELETE_SUCCESS', deletePostData });
  } catch (e) {
    // console.log(e);
    yield put({ type: 'DELETE_FAILURE', deletePostError: e.message });
  }
}

function* flaggingPost({ type = 'FLAG_POST', post }) {
  try {
    console.log(post.id);

    const flagPostData = yield call(flagPost, post);

    if (flagPostData) {
      const feedData = yield call(getAllFeed);
      yield put({ type: 'FEED_SUCCESS', feedData });
    }
  } catch (e) {
    // console.log(e);
    yield put({ type: 'FLAG_FAILURE', flagPostError: e.message });
  }
}

function* likingPost({ type = 'LIKE_POST', post }) {
  try {
    console.log(post.id);

    const likePostData = yield call(likePost, post);

    if (likePostData) {
      const feedData = yield call(getAllFeed);
      yield put({ type: 'FEED_SUCCESS', feedData });
    }
  } catch (e) {
    // console.log(e);
    yield put({ type: 'LIKE_FAILURE', likePostError: e.message });
  }
}

function* updatingPost({ type = 'UPDATE_ARTICLE', articleToUpdate }) {
  try {
    // console.log(articleToUpdate);

    const updatePostData = yield call(updatePost, articleToUpdate);

    if (updatePostData) {
      const feedData = yield call(getAllFeed);
      yield put({ type: 'FEED_SUCCESS', feedData });
    }

    // yield put({type: 'DELETE_SUCCESS', deletePostData });
  } catch (e) {
    // console.log(e);
    yield put({ type: 'UPDATE_FAILURE', updatePostError: e.message });
  }
}

function* reduxSaga() {
  yield takeLatest('ADD_USER', createUser);

  yield takeLatest('SIGNIN_USER', signIn);

  yield takeLatest('POST_ARTICLE', postNewArticle);

  yield takeLatest('POST_GIF', postNewGIF);

  yield takeLatest('GET_FEED', gettingFeed);

  yield takeLatest('GET_USER', gettingUserDetails);

  yield takeLatest('DELETE_POST', deletingPost);

  yield takeLatest('FLAG_POST', flaggingPost);

  yield takeLatest('LIKE_POST', likingPost);

  yield takeLatest('UPDATE_ARTICLE', updatingPost);

  console.log('Redux Saga is on!');
}

export default reduxSaga;
