import React, { useRef } from 'react'

const UseRef = () => {

    const ref = useRef(0);
    const inputReff = useRef(null);
    console.log(inputReff.current);
    return (
        <div>
            <p>What is UseReff Hook?</p>
            <p>UseReff hook is used to create a mutable reference that persists across renders.
                It returns mutable object with a .current property
            </p>
            <p>UseReff is used to access DOM elements, focus input elements, preserve values between re-renders, and more.</p>

            <p>{ref.current}</p>
            <button onClick={() => ref.current += 1}>+</button>

            <p>When would you use UseReff Hook?</p>
            <p>
                - Accessing DOM elements or managing Focus.
                - Storing Mutable Values that persists without causing re-renders.
                - Caching Values to avoid re initialization on re-renders.
            </p>
            <input ref={inputReff}  type="text" />
            <button onClick={()=> {
                inputReff.current.focus();
                inputReff.current.value = 10;
            }}>SetFocus</button>


            <p>Q4 - Difference between UseState and UseReff Hooks?</p>
            <p>
                - useState 
                    manages state and triggers re renders when its value changes. when you update it
                    using the setter function, it triggers a re render and updated value is reflected in UI.
                - use Ref 
                    Holds the mutable value (current) that persists across the renders without causing re render 
                    when you update it (refvalue.current = ...), the component does not re render.
                    But updated value is stored and can be accessed using ref.current across all renders.
            </p>
        </div>
    )
}

export default UseRef
