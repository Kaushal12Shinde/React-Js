import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const UseImparativeHandleHook = () => {
    const childRef = useRef(null);
  return (
    <div>
      <h3>UseImparativeHandleHook</h3>
      <h5>How do you call a fucntion of child component from parent component</h5>
      <button onClick={()=> childRef.current.focusInput()}>Focus</button>
      <ChildComponent ref={childRef}/>
    </div>
  )
}

const ChildComponent = forwardRef((props, ref) =>{
    const inputRef = useRef(null);
    const focusInput = () =>{
        inputRef.current.focus();
    }

    useImperativeHandle(ref, ()=>{
        return{
            focusInput,
        }
    })

    return(
        <input type="text" ref={inputRef} />
    )
})

export default UseImparativeHandleHook
