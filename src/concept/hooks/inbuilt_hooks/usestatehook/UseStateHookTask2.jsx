import React, { Fragment, useEffect, useState } from 'react'
import Card from './Card'

const UseStateHookTask2 = () => {

    const [products,setProducts]=useState([])

    const fetchData=async () => {
        const response=await fetch("https://fakestoreapi.com/products")
        const data=await response.json()
        setProducts(data)
    }
    useEffect(()=>{
        fetchData()
    },[])

    const handleDelete = (product_id) => {
        const filter_products= products.filter((ele)=>ele.id!==product_id)
        setProducts(filter_products)
    };
  return (
    <div>
        <h2>Welcome to my shop</h2>
        
    <div className="productssection">
        
        {
            products.map((ele)=>{
                return(
                    <Fragment key={ele.id}>
                        <Card data={ele} handleDelete={handleDelete}/>
                    </Fragment>
                )
            })
        }
    </div>
    </div>
  )
}

export default UseStateHookTask2