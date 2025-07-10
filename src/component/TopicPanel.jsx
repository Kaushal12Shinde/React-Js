import React from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'
import { useContext } from 'react'

const TopicPanel = () => {
    const {theme} = useContext(ThemeContext);
  return (
      <>
    <div className='' style={{display:'flex', gap:'10px', flexDirection:'column'}}>
      <Link to="/useState">UseState</Link>
      <Link to="/useEffect">UseEffect</Link>
      <Link to="/polyfil">Polyfil</Link>
      <Link to="/useRef">UseRef</Link>
      <Link to="/useContext">UseContext</Link>
      <Link to="/useReducer">UseReducer</Link>
      <Link to="/useMemoAndCallback">UseMemoAndCallback</Link>
      <Link to="/useImparative">UseImparativeHandleHook</Link>
    </div>
    <p>{theme}</p>
    </>
  )
}

export default TopicPanel
