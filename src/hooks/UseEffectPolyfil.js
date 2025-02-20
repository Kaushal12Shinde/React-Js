import {useRef} from 'react' 

const UseEffectPolyfil = (callback, depsArray) =>{
    // first Render Case
    let isFirstRender = useRef(true);
    let prevDeps = useRef([]);

    if(isFirstRender.current){
        isFirstRender.current = false;
        const Cleanup = callback();
        return ()=>{
            if(Cleanup && typeof Cleanup === 'function'){
                Cleanup();
            }
        }
    }
    
    //If Deps Changes Re render should happen and If Deps does not exist
    const depsChanges = depsArray ? JSON.stringify(depsArray) !== JSON.stringify(prevDeps.current) : true;
    if(depsChanges){
        const Cleanup = callback();
        return ()=>{
            if(Cleanup && typeof Cleanup === 'function' && depsArray){
                Cleanup();
            }
        }
    }

    prevDeps.current = depsArray || []; 
    // Cleanup
}

export default UseEffectPolyfil;