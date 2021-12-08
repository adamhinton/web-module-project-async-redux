import React from 'react';
import './App.css';
import {connect} from 'react-redux';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>Rick And Morty</h1>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    state,
  }
}

export default connect(mapStateToProps)(App);