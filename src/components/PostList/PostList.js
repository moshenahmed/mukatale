import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PostList extends Component{
   
    render(){
        return (
            this.props.posts.map( posts =>
        
            <div  className="post-item" key = {posts.id}>
            
                <div><h2>{posts.Title}</h2></div>
                <div><span>{posts.Descritpion}</span></div>
                <div><span>{posts.CreatedAt}</span></div>
                <div >
                    <img className="image" src={"../../assets/images/bananas.png"} alt="no" />
                </div>
            </div>
        
            ))
    }
}

PostList.propTypes={
    posts: PropTypes.array,
}

export default PostList