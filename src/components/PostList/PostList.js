import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PostList extends Component{
   
    render(){
        const items = this.props.posts.map(post =>
            <div key= {post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
        );
        return (
            <div>
                {items}
            </div>
        )

    }
}

PostList.propTypes={
    posts: PropTypes.array,
}

export default PostList