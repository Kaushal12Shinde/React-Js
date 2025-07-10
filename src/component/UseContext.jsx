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

      <h3>
            <u>useContext Hook</u>
          </h3>

          <h4>Question 1: What is useContext in React?</h4>
          <p>

        - Used to consume values ( like data or functions ) from a context created by 
        `createContext()`.
        - It allows functional components to access context values without prop drilling.
        - In scenarios where passing props through multiple levels of components is impractical.


        useContext is a React hook that allows functional components to access values from a React Context directly, without passing props manually through every level of the component tree.
      
        Why It's Used:
        It solves the problem of prop drilling — when data needs to be passed through multiple nested components that don’t need to use it themselves.

        What It Does:
useContext lets you consume shared data (like theme, user info, auth state, etc.) from a Context.Provider, and re-renders the component when the context value changes.


          </p>
    </div>
  )
}

export default UseContext
