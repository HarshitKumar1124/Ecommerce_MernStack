import React from 'react'
import {CgMouse} from "react-icons/cg"
import "./Home.css";
import Product from '../Product/Product';
import MetaData from '../Layout/MetaData';



const Home = () => {

  const Temp_product = {
    name:"Laptop",
    price:3000,
    id:"LapTop",
    images:[{
      description:"1st Image source of Product",
      url:"../../Product Images/1.jpg"
    }]
  }



  return (
    <>
    <MetaData title="Ecommerce | Home"/>
    <div className="Banner">

      <p>Welcome To Ecommerce</p>
      <h1>FIND THE AMAZING PRODUCTS BELOW</h1>

      <a href="#container">

          <button>
            Scroll <CgMouse/>
          </button>
        
      </a>

    </div>

    <h2 className='HomeHeading'>Featured Products</h2>

    <div className='container' id="container">

      <Product Product={Temp_product} />
      <Product Product={Temp_product} />
      <Product Product={Temp_product} />
      <Product Product={Temp_product} />
      <Product Product={Temp_product} />
      <Product Product={Temp_product} />
      <Product Product={Temp_product} />
      

    </div>
    </>
  )
}

export default Home