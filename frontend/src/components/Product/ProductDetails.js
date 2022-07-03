import React,{useEffect} from 'react'
// import Carousel from "react-material-ui-carousel"

import "./ProductDetails.css"

import {useDispatch,useSelector} from  "react-redux"
import { getProductDetails } from '../../Redux_Actions/ProductAction'

import MetaData from "../Layout/MetaData";
import Loader from '../Loader/Loader'

const ProductDetails = ({match}) => {

  const dispatch = useDispatch();

  const {productDetail,loading,error} = useSelector((state)=> state.productDetails)
  console.log("hi",match)

  useEffect(() => {
   
  dispatch(getProductDetails("62a6ed178f5ebe46cb07d5f5"))

  }, [dispatch])
  



  return (
    <>
        <div className='ProductDetails'>
                 
            
            {
              loading?<Loader/> :(<>
                <MetaData title="Product | Shefali Maam" />
                <div>
                    


                {
                  typeof(productDetail)==="undefined" ? <h1>Please Wait</h1>:(
                    
                  
                    productDetail.productImage.map((image_item,i)=>{
                      return <img style={{width:"500px"}}src={image_item.image_url} alt={`${i} SLIDE`} key={image_item.image_url}  />
                    })

                    
                  )
                }
                </div>
                </>
              )
            }

     

        </div>
    </>
  )
}

export default ProductDetails