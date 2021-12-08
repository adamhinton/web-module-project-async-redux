import {useEffect} from 'react';
import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { getCharacters } from './state/actions';

function App(props) {
  console.log(props);

  useEffect(() =>{
    props.getCharacters();
  }, [])

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

export default connect(mapStateToProps, {getCharacters})(App);