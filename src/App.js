import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostListContainer from "./components/PostList/PostListContainer";
import Main from './components/Main'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A katale Ke'bilime Uganda</h1>
        </header> */}
        <Header/>
        <hr/>
          <Main/>
      </div>
    );
  }
}

export default App;
