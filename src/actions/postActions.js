import axios from "axios/index";
import { GET_POSTS_SUCCESS, GET_POSTS_LOADING,GET_POSTS_ERROR} from '../actions/types';

export const getPosts = () => dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.data)
            .then(posts => {dispatch ({type:GET_POSTS_LOADING})
                dispatch({
                type: GET_POSTS_SUCCESS,
                payload: posts })
        })
            .catch(err => {
                dispatch({type: GET_POSTS_ERROR, payload: err})
              });
    
}
