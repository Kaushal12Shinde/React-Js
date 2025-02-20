import React, { useEffect, useState } from 'react';
import UseEffectPolyfil from '../hooks/UseEffectPolyfil';

const Polyfil = () => {

    const [count, setCount] = useState(0);

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
    </div>
  )
}

export default Polyfil
