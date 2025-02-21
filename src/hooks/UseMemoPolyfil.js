import { useRef } from "react";

const areDepsEqual =(prevDeps, nextDeps)=>{
    if(!prevDeps || !nextDeps)
        return false;
    if(prevDeps.length !== nextDeps.length)
        return false;

    for(let i=0;i<prevDeps.length;i++){
        if(prevDeps[i] !== nextDeps[i])
            return false;
    }
    return true;
}

const UseMemoPolyfil = ( callback, deps ) =>{
    //If deps changes → The callback should run.
    //If deps is undefined → The callback should run on every render.
    //If deps is an empty array ([]) → The callback should run only once and persist.
    //Dependencies are stored properly in prevDeps.current.

    let memoizeRef = useRef();
    let prevDeps = useRef();

    if(!deps){
        return callback();
    }

    if(!prevDeps.current || !areDepsEqual(prevDeps.current, deps)){
        memoizeRef.current = callback();
        prevDeps.current = deps;
    }

    return memoizeRef.current;
}

export default UseMemoPolyfil;