import React, { Component } from 'react';
import RepoCardLists from './components/RepoCardLists';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container app">
        <header className="App-header">
        </header>
        <div className="app-content">
          <h1>Top 6 cryptocurrency/blockchain projects by total market capitalization </h1>
          <RepoCardLists/>

        </div>
      </div>
    );
  }
}

export default App;
