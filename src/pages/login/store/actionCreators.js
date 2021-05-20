import axios from 'axios';
import * as constants from './constants';


const loginSuccess = ()=>({
    type : constants.LOGIN_SUCCESS,
    loginState: true
})

const loginError = (error)=>({
    type : constants.LOGIN_ERROR,
    loginState: false,
    message: error
})

export const loginRequest = (values) => {
    return (dispatch) => {

        axios.post('/user/login',values).then((res) => {
            const result = res.data.data;
            localStorage.setItem('token',result.token);
            const action = loginSuccess();
            dispatch(action);
        }).catch(error => {
            const action = loginError(error);
            dispatch(action);
        });
    }
};