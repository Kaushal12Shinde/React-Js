import React, { useEffect, useReducer, useState } from 'react'

const UseReducer = () => {
    const [product, setProduct] = useState([]);
    const initialState = {
        cart:[]
    }

    function reducer (state, action){
        switch (action.type) {
            case "ADD_PROCDUCT":{
                if(!state.cart.find(item => item.id === action.payload.id)){
                    return{
                        ...state,
                        cart:[...state.cart, action.payload],
                    }
                }
                return {
                    ...state,
                }
            }
            case "REMOVE_PRODUCT":{
                return{
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload.id)
                }
            }
            case "REMOVE_ALL":{
                return {
                    ...state,
                    cart: []
                }
            }
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchProducts = async() =>{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setProduct([...data]);
    }

    useEffect(()=>{
        fetchProducts();
    },[]);

    return (
        <div>
            <h1>My Cart</h1>
            <div>
                {
                    state.cart.map((item)=>{
                        return(
                            <div key={item.id} className='mycart-card'>
                                <p>{item.title}</p>
                                <button onClick={()=> dispatch({type:"REMOVE_PRODUCT", payload: item})} className='remove'>
                                    Remove
                                </button>
                            </div>
                        )
                    })
                }
                
                <button className='remove' onClick={()=> dispatch({type:"REMOVE_ALL"})}>
                    Empty Cart
                </button>
            </div>
            <div>
                <h3>Product List</h3>
                <div className='product-list'>
                    {
                        product.map((item)=>{
                            return(
                                <div key={item.id} className='cart'>
                                    <img src={item.image} alt="" />
                                    <h3>{item.title}</h3>
                                    <p>Price:{item.price} </p>
                                    <button onClick={()=> dispatch({type: "ADD_PROCDUCT", payload: item})}>
                                        Add To Cart
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UseReducer
