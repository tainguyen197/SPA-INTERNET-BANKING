import React, { Component } from 'react';
import './App.css';
import Routers  from './RouterURL/routers';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Routers />
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
