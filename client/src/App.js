import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Provider from 'react-redux';
import { createStore } from 'redux';
import M from 'materialize-css'
import Login from './components/Login'
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">
      <Nav />
      <br/>
     
    </div>
  );
}

export default App;
