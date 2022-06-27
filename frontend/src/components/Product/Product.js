import React from 'react'
import {Link} from "react-router-dom"
import ReactStar from "react-rating-stars-component"
import "./Product.css"
import logo from "../../Product Images/1.jpg"

const Product = ({Product}) => {


  const options = {
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    value:2.5,
    isHalf:true,
    size: window.innerWidth <600 ? 20:25
  }


  return (
  
     <>
     <Link className='ProductCard' style={{border:"1px solid Black"}} to="https://www.google.com">
        <img src={logo} alt={Product.name} title={Product.name}/>
        <p>{Product.name}</p>

        <div>
          <ReactStar {...options} />
          <span>Total Count Of Reviews - 256</span>
        </div>

        <span>RS - {Product.price}/-</span>

     </Link>
     </>
  )
}

export default Product