import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import teamReducer from './reducers';

import reduxSaga from './reduxSaga';


const reduxSagaMiddleware = createSagaMiddleware();
const store = createStore(teamReducer, composeWithDevTools(
  applyMiddleware(reduxSagaMiddleware),
));

reduxSagaMiddleware.run(reduxSaga);


export default store;