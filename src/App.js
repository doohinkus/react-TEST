import React, { Component } from 'react';
import './App.css';
import Api from './ApiCall.js';
import SearchBox from './search-box.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='top'>
          GiphyTweet
        </div>

        <Api />
      </div>
    );
  }
}

export default App;
