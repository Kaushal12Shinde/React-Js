import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

const UseContext = () => {
    const {theme, setTheme } = useContext(ThemeContext);
    const changeTheme = () =>{
        setTheme(theme === 'Light' ? 'Dark' : 'Light');
    }
  return (
    <div>
      <p>{theme}</p>
      <button onClick={changeTheme}>{theme}</button>
    </div>
  )
}

export default UseContext
