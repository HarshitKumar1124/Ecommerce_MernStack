import React, { Fragment,useEffect } from 'react'
import "./AllProducts.css"
import { useSelector , useDispatch } from 'react-redux'
import Loader from "../Loader/Loader.js"
import { ClearError , getProduct } from '../../Redux_Actions/ProductAction';
import ProductCard from './Product';
import MetaData from "../Layout/MetaData";


const AllProducts = () => {

    const dispatch = useDispatch();


    const {loading,error, product,productsCount} = useSelector((state)=>state.products)


    useEffect(()=>{

        dispatch(getProduct);
      
    },[dispatch])




  return (
    <Fragment>
        <MetaData title="Ecommerce | ProductStore" />
        {loading?<Loader/> :(
            <Fragment>
                
                <h2 className='productsHeading'>Products</h2>
                <div className='products-container'>
                    {
                        product && product.map((items)=>{
                            return <ProductCard  Product={items} key={items._id} />
                        })
                    }
                </div>
            </Fragment>
        )}

    </Fragment>
  )
}

export default AllProducts