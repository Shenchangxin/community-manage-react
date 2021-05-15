import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS ({
    userInfo:[],
    loginState: false,
    message:''
});

const loginRequest =(state,action)=>{
    return state.merge({
        'userInfo': action.userInfo,
        'loginState': action.loginState
    });
};
const loginSuccess =(state,action)=>{
    return state.merge({
        'userInfo': action.userInfo,
        'loginState': action.loginState
    });
}
const loginError =(state,action)=>{
    return state.merge({
        'loginState': action.loginState,
        'message': action.message
    });
}

export default (state = defaultState,action) => {
    switch (action.type) {
         case constants.LOGIN_REQUEST:
             return loginRequest(state, action)
        case constants.LOGIN_SUCCESS:
            return loginSuccess(state,action)
        case constants.LOGIN_ERROR:
            return loginError(state, action)
        default:
            return state;
    }

}