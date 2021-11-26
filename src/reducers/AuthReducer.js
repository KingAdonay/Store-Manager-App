import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    email: '', 
    password: '', 
    user: null, 
    errorMessage: '',
    loading: false
};

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email: action.payload };    
        case PASSWORD_CHANGED:
            return {...state, password: action.payload };
        case LOGIN_USER:
            return {...state, loading:true, errorMessage: ''}
        case LOGIN_USER_SUCCESS:
            return {...state, INITIAL_STATE, user: action.payload, loading: false };
        case LOGIN_USER_FAILED:
            return {...state, INITIAL_STATE, errorMessage: 'Authentication Failed!', loading: false};
        default:
            return state;
    }
}; 

//11595 v 27500
//12360 v 27500
//11511 v 27500