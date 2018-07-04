import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Header  extends  Component {
    render(){
        return(
            <header className="App-header">
            <h1 className="App-title">Otuuse Mukatale</h1>
            <ul>
                 <li><Link to= '/Main'>Home</Link></li>
                 <li><Link to= '/PostForm'>New Post</Link></li>
                 <li><Link to= '/PostForm'>Help</Link></li>
            </ul>
        </header>
        )
    }
}

export default Header