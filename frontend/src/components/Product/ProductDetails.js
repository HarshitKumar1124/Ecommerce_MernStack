import React,{useEffect} from 'react'
// import Carousel from "react-material-ui-carousel"

import "./ProductDetails.css"

import {useDispatch,useSelector} from  "react-redux"
import { getProductDetails } from '../../Redux_Actions/ProductAction'

import MetaData from "../Layout/MetaData";
import Loader from '../Loader/Loader'

import Reactstart from "react-rating-stars-component"

const ProductDetails = ({match}) => {

  const dispatch = useDispatch();

  const {productDetail,loading,error} = useSelector((state)=> state.productDetails)
  console.log("hi",match)

  useEffect(() => {
   
  dispatch(getProductDetails("62a6ed178f5ebe46cb07d5f5"))

  }, [dispatch])

let options = {
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    value:2.5,
    isHalf:true,
    size: window.innerWidth <600 ? 20:25
  }
  



  return (
    <>
        <div className='ProductDetails'>
                 
            
            {
              loading?<Loader/> :(<>
              <MetaData title="Product | Shefali Maam" />
              {
              typeof(productDetail)==="undefined" ? <h1>Please Wait</h1>:(<>
              
                <div style={{border:"3px solid green"}}>
                    

                    <div className='carousel' style={{border:"3px solid red"}}>
                    {
                     
                        
                      
                        productDetail.productImage.map((image_item,i)=>{
                          return <img style={{width:"500px"}}src={image_item.image_url} alt={`${i} SLIDE`} key={image_item.image_url}  />
                        })
    
                        
                      
                    }
    
                    </div>
                </div>
    
                  <div style={{border:"3px solid yellow"}}>
                    <div className='DetailBlock-1' style={{border:"3px solid red"}}>
    
                      <h2>{productDetail.name}</h2>
                      <p>Product #ID - {productDetail._id} </p>
                      
                    </div>
    
                     
                    <div className='DetailBlock-2' style={{border:"3px solid blue"}}>
                      <span style={{display:"none"}}>{options.value = productDetail.rating}</span>
                      <Reactstart {...options} />
                      <span>NO. OF REVIEWS - {productDetail.numberOfReviews}</span>
    
                    </div>
                     
                    <div className='DetailBlock-3' style={{border:"3px solid black"}}> 
    
                      <h1> ₹ {productDetail.price}/-</h1>
    
                      <div className='DetailBlock-3-1'>
    
                        <div className='DetailBlock-3-1-1'>
    
                          <button>-</button>
                          <input type="number" value="1"/>
                          <button>+</button>
                          {/* <input type="number" value="1"/> */}
                        </div>
    
                        <button>ADD TO CART</button>
    
                      </div>
    
                      <p>
                        <b className= {productDetail.stock<1 ?"redcolor" :'greencolor'}>
                          <span style={{color:"rgba(0,0,0,0.651)"}}>Status</span>: {productDetail.stock <1 ? "Out Of Stock !!" : "Instock"}
    
                        </b>
                      </p>
    
                    </div>
                    
                    <div className='DetailBlock-4'style={{border:"3px solid dodgerblue"}}>
    
                      Description : {productDetail.description}
                    </div>
    
                    <button className='submitReview'>SUBMIT REVIEW</button>
    
    
                </div>
              
              
              </>)}
              
                </>
              )
            }

     

        </div>
    </>
  )
}

export default ProductDetails