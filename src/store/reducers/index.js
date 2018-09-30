import { combineReducers } from 'redux';
import CustomerReducer from './CustomerReducer';

const AppReducer = combineReducers({
    customers: CustomerReducer
});

export default AppReducer