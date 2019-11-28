import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import teamReducer from './reducers';



const store = createStore(teamReducer, devToolsEnhancer());

export default store;