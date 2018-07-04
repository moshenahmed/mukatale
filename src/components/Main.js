import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import PostListContainer from './PostList/PostListContainer';
import PostForm from './PostList/PostForm';

class Main extends Component{
    render(){
        return(
            <main>
            <Switch>
     <Route exact path='/' component={PostListContainer}/>
     <Route path='/PostForm' component={PostForm}/>
            </Switch>
        </main>
        )
    }
}

export default Main