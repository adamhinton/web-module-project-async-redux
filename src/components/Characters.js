import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getCharacters } from '../state/actions';

    function Characters(props) {

        useEffect(() =>{
            props.getCharacters();
        }, [])

    return (
        <div>
            <p>here</p>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        characters:state,
    };
};

export default connect(mapStateToProps, {getCharacters})(Characters)

//   , []