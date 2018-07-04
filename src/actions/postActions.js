import axios from "axios/index";
import { GET_POSTS_SUCCESS, GET_POSTS_LOADING,GET_POSTS_ERROR, GET_POSTFORM_LOADING, GET_POSTFORM_SUCCESS, SUBMIT_POSTFORM_SUCCESS,SUBMIT_POSTFORM_ERROR} from '../actions/types';


export const getPosts = () => dispatch => {
        axios.get('http://localhost:50656/')
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

export const createPost  =  postData  =>  dispatch =>  {
    axios.post('http://localhost:50656/', {
        method: 'post',
        headers:{
            'content-type':'application/json'
        },
        body:  JSON.stringify(postData)

    })
    .then(response =>response.JSON())
    .then(post =>{ dispatch ({type:GET_POSTFORM_LOADING})
    dispatch({
        type: SUBMIT_POSTFORM_SUCCESS,
        payload: post
    })
    })
    .catch(error =>
        dispatch({
            type:SUBMIT_POSTFORM_ERROR,
            payload: error
        })
    )
}
