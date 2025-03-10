
import { createContext, useState } from 'react'
import './App.css'
import Polyfil from './component/Polyfil'
import UseEffect from './component/useEffect'
import UseRef from './component/UseRef'
import UseState from './component/UseState'
import UseContext from './component/useContext'
import ThemeContext from './context/ThemeContext'
import UseReducer from './component/UseReducer'
import UseMemoAndCallback from './component/UseMemoAndCallback'
import UseImparativeHandleHook from './component/UseImparativeHandleHook'

function App() {
  const [theme, setTheme] = useState('Light');
 
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      <Polyfil/>
      {/* <UseRef/> */}
      {/* <UseContext/> */}
      {/* <UseReducer/> */}
      {/* <UseMemoAndCallback/> */}
      {/* <UseImparativeHandleHook/> */}
    </ThemeContext.Provider>
  )
}

export default App
