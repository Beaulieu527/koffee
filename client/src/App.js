import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Provider from 'react-redux';
import M from 'materialize-css'
import { createStore } from 'redux';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
