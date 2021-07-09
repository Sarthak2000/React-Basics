import React, { Component, useState } from 'react';
import Profile from './Components/Profile/Profile';
import Sett from './Components/Sett/Sett';
export const ThemeContext = React.createContext();


function usecontext() {
  let [lighttheme, setTheme] = useState(true); // lighttheme -> true by default

  function toggletheme() {
    setTheme((prevTheme) => !prevTheme);
  }
  return (
    <ThemeContext.Provider value={lighttheme}> {/*wrap the components with themecontext*/}
      <div className="App">
        <button onClick={toggletheme}>Toggle Theme</button>
        <div>
          <Profile></Profile>
          <ThemeContext.Provider value={!lighttheme}> 
          <Sett></Sett>
          </ThemeContext.Provider>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
export default usecontext;
