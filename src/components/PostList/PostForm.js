import React, {Component}  from 'react';
import {createPost} from '../../actions/postActions';
import {connect} from 'react-redux';
import propTypes  from 'prop-types'

class PostForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            title: '',
            Description: '',
            image:''
        };
        this.onChange =  this.onChange.bind(this);
        this.OnSubmit= this.OnSubmit.bind(this);
    }
    onChange(event){
this.setState({[event.target.name]: event.target.value});

}


    OnSubmit(event){
        alert("Are you sure you want to post " +  "  " + this.state.title );
        event.preventDefault();
    

    const post ={
        title: this.state.title,
        Description: this.state.Description,
        image: this.state.image

    };
    this.props.createPost(post);
}
    render(){
        return(
            <form className= "create-post" onSubmit={this.OnSubmit}>
            <label>Title: </label><br/>
             <input type="text" name="title" onChange={this.onChange} value={this.state.title}/><pre/>
             <label>Description:</label><br/>
            <input type="text" name="Description" onChange={this.onChange} value={this.state.Description}/><pre/>
            <label>Image:</label><br/>
            <input type="text" name="image" onChange={this.onChange} value={this.state.image}/><pre/>
            <input type="submit" value="Submit" />
            </form>)
    }
}
PostForm.propTypes={
    createPost: propTypes.func,
}

export default connect(null,{createPost})(PostForm)