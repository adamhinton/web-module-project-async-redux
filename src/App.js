import React from 'react';
import './App.css';
import {connect} from 'react-redux';

function App() {
  return (
    <div className="App">
      <h1>Rick And Morty</h1>
    </div>
  );
}

export default connect()(App);