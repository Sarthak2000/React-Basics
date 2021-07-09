import React, { Component, useState } from 'react';

const UseStateObj = () => {

    let [state, setState] = useState({ count: 1, color: "blue" });

    let handlestate = () => {
        // setState((prevState) =>{
        //     return {count:prevState.count+1}; // Wrong -> this would remove the color and only prints count
        // }) 
         setState((prevState) =>{
            return {...prevState,count:prevState.count+1}; // use spread operator to presever other state elements
        }) 

    }
    return (
        <React.Fragment>
            <br></br><br></br><br></br>
            <button onClick={handlestate}>{state.count}</button>
            <div>{state.color}</div>
        </React.Fragment>
    );
}


export default UseStateObj;