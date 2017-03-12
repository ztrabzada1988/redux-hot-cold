
import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import reducer from './reducers';


const CreateStore = Redux.createStore;

export const Store = CreateStore(Reducers.HotColdReducer);
