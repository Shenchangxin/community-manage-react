import {combineReducers} from 'redux-immutable';
import app from "../reducers/app";
import user from "../reducers/user";

const reducer = combineReducers({
    app: app,
    user: user
});

export default reducer;