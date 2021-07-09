import React, { Component, useState } from 'react';

function UseState(){
    let [count,setcount]=useState(1);
    
    let increment=()=>{
        // setcount(count+1); m1
        setcount((prevcount)=>prevcount+1)
    }
    let decrement= ()=>{
        // setcount(count-1); m1
        setcount((prevcount)=>prevcount-1) 
    }
    return(
        <React.Fragment>
            <div>{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </React.Fragment>
    )
}

export default UseState;