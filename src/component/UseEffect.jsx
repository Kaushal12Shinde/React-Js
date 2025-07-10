import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

const UseEffect = () => {

    const [product, setProduct] = useState([]);

    const [second, setSeconds] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds((prev) => prev +1);
        },1000)

        // component unmounts or cleanup method
        return () =>{
            clearInterval(interval);
            console.log('Component Unmount');
        }
    },[]);

    const fetchProducts = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${second}`);
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
       fetchProducts();
    },[second])

    useEffect(()=>{
        console.log('Component Mounted');
    },[])

    useLayoutEffect(()=>{
        console.log('Component Layout Mounted');
    },[])


  return (
    <div>
        <p>Q1 - What is UseEffect</p>
        <p>
            UseEffect is hook use in functional Component to perform side effects
            after rendering, such as fetching data from an API, setting timers, or
            updating the DOM.
        </p>
        <p>Q2 - What is Dependecy Array</p>
        <ul style={{ listStyle: "disc" }}>
            <li>When it is empty it runs only once</li>
            <li>when the value inside array changes, effects re runs </li>
            <li>If removed the array, effect will run on every render</li>
            <li>
                Dependency Array is use to ensure that effects runs only when necessary and
                prevents unnecessary re-excution of effect by adding required Dependecy in array.. optimizing the
                performance and avoiding potential Bugs
            </li>
        </ul>
        <p>Q3 - Example for data fetching using UseEffect</p>
        <div>
            <p>{product?.title} <br />Price : {product?.price}</p>
            <img src={product?.image} width={100} height={100} alt="" />
        </div>
        <p>
            Q4 - Convert Major LifeCyle Methods to UseEffect and Explain 
            {/* Class vs Functional Component lesson*/}
        </p>
        <p> Q5 - How to perform cleanup in useEffect? Explain With Example</p>
        <p>
            You can return a clean up function inside useEffect, which re runs or component unmounts. <br />
            this is majorly usefull for cleaning up subscriptions offers , timers, event listeners etc
        </p>
        {second}

        <p>Q6 - UseLayoutEffect Hook and how it is different from useEffect</p>
        <p>
            Use Effect - 
                Asynchronous : runs after the render cycle is compitted to the screen.
                Good for performance : Does not Block the browser from painting changes on the screen.

            UseLayoutEffect - 
                Synchronous : Runs Immidiately after the dom is updated but before the browser paints anything on the screen.
                Potentially blocking : can Potentially cause delays in the rendering process if the operations are heavy.
                <Link to='/useLayoutEffect'>
                    <button>useLayoutEffect</button>
                </Link>
        </p>
        <Link to='/'>
            <button>Back</button>
        </Link>
       
    </div>
  );
};

export default UseEffect;
