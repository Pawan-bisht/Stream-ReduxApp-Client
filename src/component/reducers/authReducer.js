import { ReduxAction } from '../constants';
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type)
    {
        case ReduxAction.SIGN_IN :
            return { ...state, isSignedIn: true, userId: action.payload };

        case ReduxAction.SIGN_OUT :
            return { ...state, isSignedIn: false, userId: null };
        
        default:  
            return state;      
    }
}