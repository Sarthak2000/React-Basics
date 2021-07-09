import React, {useContext } from 'react';
import { ThemeContext } from '../../App';

const Profile = () => {
    const theme=useContext(ThemeContext); // gets the props w/o passing props :)
    // console.log({theme});
    const styles ={
        backgroundColor : theme ? "lightgrey" : "black",
        color : theme ? "black" : "white",
        padding : "10px" ,
        margin : "5px"
    }
    return ( <h2 style={styles}> Hi from Profile</h2> );
}
 
export default Profile;