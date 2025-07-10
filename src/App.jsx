
import { createContext, useState } from 'react'
import './App.css'
import Polyfil from './component/Polyfil'
import UseEffect from './component/UseEffect'
import UseRef from './component/UseRef'
import UseState from './component/UseState'
import UseContext from './component/useContext'
import ThemeContext from './context/ThemeContext'
import UseReducer from './component/UseReducer'
import UseMemoAndCallback from './component/UseMemoAndCallback'
import UseImparativeHandleHook from './component/UseImparativeHandleHook'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import TopicPanel from './component/TopicPanel'
import UseLayoutEffect from './component/UseLayoutEffect'
import DragDrop from './component/DragDrop'

function App() {
  const [theme, setTheme] = useState('Light');
 
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopicPanel/>}/>
          <Route path='/useState' element={<UseState/>}/>
          <Route path='/useEffect' element={ <UseEffect/>}/>
          <Route path='/polyfil' element={<Polyfil/>}/>
          <Route path='/useRef' element={<UseRef/>}/>
          <Route path='/useContext' element={<UseContext/>}/>
          <Route path='/useReducer' element={<UseReducer/>}/>
          <Route path='/useMemoAndCallback' element={<UseMemoAndCallback/>}/>
          <Route path='/useImparative' element={<UseImparativeHandleHook/>}/>
          <Route path='/useLayoutEffect' element={ <UseLayoutEffect/>}/>
        
        </Routes>
        <DragDrop/>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
