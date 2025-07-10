import React, { useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const ref = useRef();

    useLayoutEffect(() => {
        ref.current.scrollIntoView();
    }, []);

    return (
        <div style={{ height: '200vh' }}>
            <div style={{ marginTop: '150vh' }} ref={ref}>
                👋 Scrolls directly to me without flicker
            </div>
        </div>
    );
}

export default UseLayoutEffect;
