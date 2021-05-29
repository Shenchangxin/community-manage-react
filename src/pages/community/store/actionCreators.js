import axios from 'axios';
import * as constants from './constants';
import qs from 'qs';


const getCommunitySuccess = (result)=>({
    type : constants.GET_COMMUNITY_SUCCESS,
    data: result,
    getState: true
})

const getCommunityError = (error)=>({
    type : constants.GET_COMMUNITY_ERROR,
    message : error.message,
    getState: false
})
const searchCommunitySuccess = (result)=>({
    type: constants.SEARCH_COMMUNITY_SUCCESS,
    data: result
})
const searchCommunityError = (error)=>({
    type: constants.SEARCH_COMMUNITY_ERROR,
    message : error.message
})
const addCommunityError = (error)=>({
    type: constants.ADD_COMMUNITY_ERROR,
    message : error.message
})
const addCommunitySuccess = ()=>({
    type: constants.ADD_COMMUNITY_SUCCESS,
    visible: false,
    loading: false
})
const deleteCommunitySuccess = ()=>({
    type: constants.DELETE_COMMUNITY_SUCCESS,
    deleteState: true
})
const deleteCommunityError = (error)=>({
    type: constants.DELETE_COMMUNITY_ERROR,
    deleteState: false,
    message: error.message
})
const showModal = ()=>({
    type: constants.SHOW_MODAL,
    visible: true,
})
const cancelShowModal = ()=>({
    type: constants.CANCEL_SHOW_MODAL,
    visible: false,
})
const showUpdateModal = (id)=>({
    type: constants.SHOW_UPDATE_MODAL,
    updateVisible: true,
    updateId: id,
})
const cancelShowUpdateModal = ()=>({
    type: constants.CANCEL_SHOW_UPDATE_MODAL,
    updateVisible: false,
    updateId: 0
})
const updateCommunitySuccess = ()=>({
    type: constants.UPDATE_COMMUNITY_SUCCESS,
    updateState: true
})
const updateCommunityError = (error)=>({
    type: constants.UPDATE_COMMUNITY_ERROR,
    updateState: false,
    message: error.message
})

export const communityRequest = () => {
    return (dispatch) => {
        axios.get('/api/admin/getCommunity').then((res) => {
            const result = res.data.data;
            const action = getCommunitySuccess(result);
            dispatch(action);
        }).catch(error => {
            const action = getCommunityError(error);
            dispatch(action);
        });
    }
};
export const searchCommunity  = (values) => {
    return (dispatch) => {
        axios.get('/api/admin/searchCommunity',{
                params: values
            }
            ).then((res) => {
            const result = res.data.data;
            console.log(values)
            const action = searchCommunitySuccess(result);
            dispatch(action);
        }).catch(error => {
            console.log(error)
            const action = searchCommunityError(error);
            dispatch(action);
        });
    }
};
export const addCommunity  = (values) => {
    return (dispatch) => {
        axios.post('/api/admin/addCommunity',qs.stringify(values)).then((res) => {
            console.log(values)
            const action = addCommunitySuccess();
            dispatch(action);
        }).catch(error => {

            const action = addCommunityError(error);
            dispatch(action);
        });
    }
};
export const handleDelete  = (id) => {
    return (dispatch) => {
        axios.delete('/api/admin/deleteCommunity',{
            params: {
                id: id
            }
        }).then((res) => {
            const action = deleteCommunitySuccess();
            dispatch(action);
        }).catch(error => {
            const action = deleteCommunityError(error);
            dispatch(action);
        });
    }
};

export const handleShow  = () => {
    return (dispatch) => {
            const action = showModal();
            dispatch(action);

    }
};
export const handleCancel  = () => {
    return (dispatch) => {
        const action = cancelShowModal();
        dispatch(action);

    }
};
export const handleUpdate  = (id) => {
    return (dispatch) => {
        const action = showUpdateModal(id);
        dispatch(action);

    }
};
export const handleCancelUpdate  = () => {
    return (dispatch) => {
        const action = cancelShowUpdateModal();
        dispatch(action);

    }
};
export const handleUpdateCommunity  = (values,id) => {
    return (dispatch) => {
        axios.post('/api/admin/updateCommunity',qs.stringify({
            name: values.name,
            description: values.description,
            type: values.type,
            id: id

        })).then((res) => {
            const action = updateCommunitySuccess();
            dispatch(action);
        }).catch(error => {
            const action = updateCommunityError(error);
            dispatch(action);
        });
    }
};