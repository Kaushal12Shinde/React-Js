import React, { useEffect, useState } from 'react';
import UseEffectPolyfil from '../hooks/UseEffectPolyfil';
import UseWindowSize from '../hooks/UseWindowSize';

const Polyfil = () => {

    const [count, setCount] = useState(0);
    const {width ,height} = UseWindowSize();

    UseEffectPolyfil(()=>{
      console.log("Count" + count);

      return () =>{
        console.log("Cleanup");
      }
    },[count])

    const increament = ()=>{
        setCount(count + 1);
    }
    const decreament = ()=>{
        setCount(count - 1);
    }
  return ( 
    <div>
      <p>{count}</p>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>

      Get the window Size -
      Width - {width}
      Height - {height}
    </div>
  )
}

export default Polyfil
