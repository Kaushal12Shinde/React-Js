import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");
    const [data, setData] = useState({
        firstname: "",
        lastname:"",
        email:""
    });

    // const handleFormInput = (e) =>{
    //     const {name, value} = e.target;
    //     setData({...data , [name]:value});
    // }
    const increaseCount = () =>{
        setCount(count+1);
        // setCount(prev => prev+1);
    }
   
    const handleText = (e) =>{
        setValue(e.target.value);
    }

  return (
    <div>
      <h1>useState</h1>
      <p>
        useState is hook in React that allows functional component to manage state by declaring state varibales
        and providing a function to update them.
      </p>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>
        Click Me
      </button>

      <p>Q2 - What is two way Data Biniding and how can we achive it in React?</p>
      <p>Value Of Input Tag - {value}</p>
      <input onChange={handleText} type="text" />

      <p>Q3 - Build a form containing First Name, Last Name, Email. Use Only one state to manage all fields</p>
      <form onSubmit={(e)=> { e.preventDefault(); console.log(data)}}>
        <label>First Name</label>
        <input type="text" placeholder='First Name' name='firstname' onChange={(e)=> setData({...data, firstname: e.target.value})} />
        <br />
        <label>Last Name</label>
        <input type="text" placeholder='Last Name' name='lastname' onChange={(e)=> setData({...data, lastname: e.target.value})} />
        <br />
        <label>Email</label>
        <input type="email" placeholder='Email' name='email' onChange={(e)=> setData({...data, email: e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
      <p>
        First Name: {data.firstname} &nbsp;
        Last Name: {data.lastname} &nbsp;
        Email: {data.email}
      </p>
    </div>
  )
}

export default UseState
