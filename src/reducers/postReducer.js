import { GET_POSTS_SUCCESS, GET_POSTS_LOADING,GET_POSTS_ERROR} from '../actions/types';
const initialState = {
    postDisplay: [],
    postDisplayNetworkState: null,
    postDisplayNetworkError: null,
}
export default function (state = initialState, action) {
   switch (action.type) {
       case GET_POSTS_SUCCESS:
           return {
               ...state,
               postDisplay: action.payload,
               postDisplayNetworkState:"SUCCESS",
               postDisplayNetworkError: null
           }

       case GET_POSTS_LOADING:
           return{
               ...state,
               postDisplayNetworkState: "LOADING",
           }
       case GET_POSTS_ERROR:
           return{
               ...state,
               postDisplayNetworkState: "ERROR",
               postDisplayNetworkError: action.error
           }
       default:
           return state
   }
}