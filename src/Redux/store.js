import {createStore, combineReducers} from 'redux';
import ActionReducer from './reducer/actionReducer';

const rootReducer = combineReducers({
  login: ActionReducer,
});

export const store = createStore(rootReducer);
