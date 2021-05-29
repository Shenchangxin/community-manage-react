import {combineReducers} from 'redux-immutable';
import {reducer as loginReducer} from '../pages/login/store';
import {reducer as registerReducer} from '../pages/register/store';
import {reducer as communityReducer} from '../pages/community/store';



const reducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    community: communityReducer,

});

export default reducer;