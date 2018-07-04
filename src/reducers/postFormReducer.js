import { GET_POSTS_SUCCESS, GET_POSTS_LOADING,GET_POSTS_ERROR, 
    GET_POSTFORM_LOADING, GET_POSTFORM_SUCCESS, SUBMIT_POSTFORM_SUCCESS,
SUBMIT_POSTFORM_ERROR} from '../actions/types';

const initialState = {
    newPost:[],
    newPostNetworkState: null,
    newPostNetworkError: null,
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_POSTFORM_SUCCESS:
        return {
            ...state,
            newPostNetworkState: "SUCCESS",
            newPostNetworkError: null,
        }
        case SUBMIT_POSTFORM_SUCCESS:
        return {
            ...state,
            newPost: action.payLoad,
            newPostNetworkState: "SUCCESS",
            newPostNetworkError: null,
        }
        case GET_POSTFORM_LOADING:
        return {
            ...state,
            newPostNetworkState: "LOADING",
        }
        case SUBMIT_POSTFORM_ERROR:
        return {
            ...state,
            newPostNetworkState: "ERROR",
            newPostNetworkError: action.error,
        }

        default:
        return state;
    }
}