import React, { useEffect } from 'react'
import {CgMouse} from "react-icons/cg"
import "./Home.css";
import Product from '../Product/Product';
import MetaData from '../Layout/MetaData';
import {getProduct} from "../../Redux_Actions/ProductAction"

//redux use useSelector and Dispatch to fetch data from redux state
import {useDispatch, useSelector} from  "react-redux"

const Home = () => {

  const dispatch = useDispatch();



  useEffect(() => {
   dispatch(getProduct)
  }, [dispatch])
  

  const {loading,error,productsCount}= useSelector(state=>state.products)

  console.log("fetch: ", loading , error,productsCount)

  // const Listof_ALL_DB_Products = Data_fetched_from_state.products.error;
  // const Total_Product_count = Data_fetched_from_state.products.productsCount;

  // console.log(Listof_ALL_DB_Products,Total_Product_count)

 

  const Temp_product = {
    name:"Laptop",
    price:3000,
    id:"LapTop",
    images:[{
      description:"1st Image source of Product",
      url:"../../Product Images/1.jpg"
    }]
  }

  const counter=[1,2,3,4,5,6,7,8]

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

      
      {
        counter.map(items=>{
          return <Product Product={Temp_product}  />
        })
      }
      
      {/* <Product Product={Temp_product} />
      <Product Product={Temp_product} />
      <Product Product={Temp_product} />
      <Product Product={Temp_product} />
      <Product Product={Temp_product} />
      <Product Product={Temp_product} />
      <Product Product={Temp_product} /> */}
      

    </div>
    </>
  )
}

export default Home