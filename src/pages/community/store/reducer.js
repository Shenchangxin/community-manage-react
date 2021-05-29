import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS ({
    data:[],
    getState: false,
    message: '',
    visible: false,
    loading: false,
    deleteState: false,
    updateVisible: false,
    updateState: false,
    updateId: 0
});

const getCommunitySuccess =(state,action)=>{
    return state.merge({
        'getState': action.getState,
        'data': action.data
    });
}
const getCommunityError =(state,action)=>{
    return state.merge({
        'getState': action.getState,
    });
}

const searchCommunitySuccess =(state,action)=>{
    return state.merge({
        'data': action.data
    });
}
const searchCommunityError =(state,action)=>{
    return state.merge({
        'message': action.message
    });
}
const addCommunityError =(state,action)=>{
    return state.merge({
        'message': action.message
    });
}
const addCommunitySuccess =(state,action)=>{
    return state.merge({
        'visible': action.visible,
        'loading': action.loading
    });
}
const deleteCommunitySuccess =(state,action)=>{
    return state.merge({
        'deleteState': action.deleteState
    });
}
const deleteCommunityError =(state,action)=>{
    return state.merge({
        'message': action.message
    });
}
const updateCommunitySuccess =(state,action)=>{
    return state.merge({
        'updateState': action.updateState
    });
}
const updateCommunityError =(state,action)=>{
    return state.merge({
        'updateState': action.updateState,
        'message': action.message
    });
}
const showModal =(state,action)=>{
    return state.merge({
        'visible': action.visible,
    });
}
const cancelShowModal =(state,action)=>{
    return state.merge({
        'visible': action.visible,
    });
}
const showUpdateModal =(state,action)=>{
    return state.merge({
        'updateVisible': action.updateVisible,
        'updateId': action.updateId
    });
}
const cancelShowUpdateModal =(state,action)=>{
    return state.merge({
        'updateVisible': action.updateVisible,
        'updateId': action.updateId
    });
}

export default (state = defaultState,action) => {
    switch (action.type) {
        case constants.GET_COMMUNITY_SUCCESS:
            return getCommunitySuccess(state,action)
        case constants.GET_COMMUNITY_ERROR:
            return getCommunityError(state, action)
        case constants.SEARCH_COMMUNITY_SUCCESS:
            return searchCommunitySuccess(state, action)
        case constants.SEARCH_COMMUNITY_ERROR:
            return searchCommunityError(state, action)
        case constants.ADD_COMMUNITY_SUCCESS:
            return addCommunitySuccess(state, action)
        case constants.ADD_COMMUNITY_ERROR:
            return addCommunityError(state, action)
        case constants.DELETE_COMMUNITY_SUCCESS:
            return deleteCommunitySuccess(state, action)
        case constants.DELETE_COMMUNITY_ERROR:
            return deleteCommunityError(state, action)
        case constants.UPDATE_COMMUNITY_SUCCESS:
            return updateCommunitySuccess(state, action)
        case constants.UPDATE_COMMUNITY_ERROR:
            return updateCommunityError(state, action)
        case constants.SHOW_MODAL:
            return showModal(state, action)
        case constants.CANCEL_SHOW_MODAL:
            return cancelShowModal(state, action)
        case constants.SHOW_UPDATE_MODAL:
            return showUpdateModal(state, action)
        case constants.CANCEL_SHOW_UPDATE_MODAL:
            return cancelShowUpdateModal(state, action)
        default:
            return state;
    }

}