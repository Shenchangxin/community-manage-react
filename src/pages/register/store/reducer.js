import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS ({
    userInfo:[],
    registerState: false,
    message:''
});

const registerRequest =(state,action)=>{
    return state.merge({
        'userInfo': action.userInfo,
        'registerState': action.loginState
    });
};
const registerSuccess =(state,action)=>{
    return state.merge({
        'userInfo': action.userInfo,
        'registerState': action.loginState
    });
}
const registerError =(state,action)=>{
    return state.merge({
        'registerState': action.loginState,
        'message': action.message
    });
}

export default (state = defaultState,action) => {
    switch (action.type) {
        case constants.REGISTER_REQUEST:
            return registerRequest(state, action)
        case constants.REGISTER_SUCCESS:
            return registerSuccess(state,action)
        case constants.REGISTER_ERROR:
            return registerError(state, action)
        default:
            return state;
    }

}