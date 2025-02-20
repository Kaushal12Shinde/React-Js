import React, { useCallback, useMemo, useState } from 'react'

const UseMemoAndCallback = () => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(100);
    const squaredValue = () => {
        console.log(count);
        return count * count;
    };
    const squareValueMemo = useMemo(squaredValue, [count]);
    const squareValueCallback = useCallback(squaredValue,[count]);
    return (
        <div>
            <p>What is useMemo hook in React?</p>
            <p>It is hook use to memoize the result of a function and cache it, recalculating it only if Dependencies changes.</p>
            <p>Squared Value - {squareValueMemo}</p>
            <button onClick={()=> setCount(count+1)}>Increase</button>
            <p>Decrease Value - {count1}</p>
            <button onClick={()=> setCount1(count1-1)}>Decrease</button>
            <p>When should you use useMemo?</p>
            <p>
                When Computing a value is expensive or time consuming
                When you want to prevent the unnecessary re-computation of value across every re-renders.
            </p>
            <p>How does useMemo Differs froms useState</p>
            <p>
                useMemo memoizes a computed value and returns the cached value without causing re-render
                while useState manages the state and triggers re-renders when the state changes.
            </p>
            <p>What is useCallback hook in react?</p>
            <p>
                It is hook used to memoize a provided callback fucntion, returning the memoized version of
                the fucntion
            </p>
            <p>UseCallback - {squareValueCallback()}</p>
            <p>when Should you not use useCallback or useMemo</p>
            <p>Event Handlers or Inline Functions, Excessive memory Consumption, garbage collection concerns</p>
        </div>
    )
}

export default UseMemoAndCallback
