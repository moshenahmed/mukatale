import React, {Component} from 'react'
import {getPosts} from "../../ActionApi";
import PostList from "./PostList.js"
import {connect} from 'react-redux'


class PostListContainer extends Component{
    constructor(props){
        super(props)
        this.state ={
            posts: {}
        }
    }

    componentDidMount(){
this.setState({posts: this.state.posts})
    }

render(){
        console.log(this.state.posts)
        return(
    <PostList  />
        )
}

}

 function mapDispatchToProps(dispatch) {
     return {
         posts: () => {
             dispatch(getPosts())
         }
     }
 }
function mapStateToProps(state) {
    return ({posts: "posts:" + state.posts})
}

export default connect(mapDispatchToProps, mapStateToProps)(PostListContainer)