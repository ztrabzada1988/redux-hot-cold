import Redux from 'redux';
import Reducers from './reducers/index';

const CreateStore = Redux.createStore;

export const Store = CreateStore(Reducers.HotColdReducer);
