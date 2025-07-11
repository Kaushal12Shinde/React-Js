import React, { useEffect, useState } from 'react'

const Pagination = () => {
    
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(0);

    const fetchProducts = async ()=>{
        // ?limit=10&skip=10

        const response = await fetch(`https://dummyjson.com/products/?limit=10&skip=${page*10-10}`)
        const data = await response.json();
        if(data && data.products){
            console.log(data.products);
            setProducts(data.products);
            setTotalPages(data.total/10);
        }
    }

    useEffect(()=>{
        fetchProducts();
        console.log(page);
    },[page])

    const handlePagePrev = () =>{
        if(page>1){
            setPage(page-1);
        }
    }

    const handlePageNext = () =>{
        if(page<totalPages){
            setPage(page+1);
        }
    }


  return (
    <>
        <div className=''>
            {
                products.map((prod)=> <p key={prod.id}>{prod.title}</p>)
            }
        </div>
        { totalPages>0 &&
            <div className='' style={{display:'flex',}}>
                { page > 1 &&
                    <span onClick={handlePagePrev} style={styles.pagination}>
                        Prev
                    </span>
                }
                {
                    
                    [...Array(Math.ceil(totalPages))].map((_,index)=>
                        <span onClick={()=> setPage(index+1)} style={styles.pagination} key={index}>
                            {index+1}
                        </span>
                    )
                }
                {
                    page < totalPages &&
                    <span onClick={handlePageNext} style={styles.pagination}>
                        Next
                    </span>
                }
            </div>
        }
    </>
  )
}

export default Pagination

const styles ={
    pagination:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'50px',
        aspectRatio:1/1,
        padding: '8px',
        border:"#000 1px solid",
        textAlign:'center',
        cursor:'pointer',
    }
}
