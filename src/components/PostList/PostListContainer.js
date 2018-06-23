import React, {Component} from 'react'
import {getPosts} from "../../actions/postActions";
import PostList from "./PostList.js"
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class PostListContainer extends Component {

    componentWillMount() {
     this.props.getPosts();
    }

    render() {
        console.log(this.props.posts.postDisplays)
        return(
        <PostList posts={this.props.posts}/>
        )

    }
}


function mapStateToProps(state) {
    return ({
        posts:  state.posts.postDisplay})
}

PostListContainer.propTypes ={
    getPosts : PropTypes.func,
    posts: PropTypes.array


}

export default connect(mapStateToProps, {getPosts})(PostListContainer)