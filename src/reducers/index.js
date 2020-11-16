import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as fromReducer } from 'redux-form';


export default combineReducers({
    auth : authReducer,
    form : fromReducer
});