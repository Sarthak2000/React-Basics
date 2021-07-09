import React, { Component, useContext } from 'react';
import { ThemeContext } from '../../App';
function Sett(){
    const theme=useContext(ThemeContext); // gets the props w/o passing props :)

    const styles ={
        backgroundColor : theme ? "lightgrey" : "black",
        color : theme ? "black" : "white",
        padding : "10px" ,
        margin : "5px"
    }
    return(
        <h1 style={styles}> hi from settings</h1>
    )
}
export default Sett;