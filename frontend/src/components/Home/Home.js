import React, { Profiler, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "../Product/Product";
import MetaData from "../Layout/MetaData";
import { getProduct } from "../../Redux_Actions/ProductAction";
import Loader from "../Loader/Loader.js"

//redux use useSelector and Dispatch to fetch data from redux state
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct);
  }, [dispatch]);

  const { loading, error,product, productsCount } = useSelector(
    (state) => state.products
  );



  console.log("fetch: ", loading,product, productsCount);



  // const Listof_ALL_DB_Products = Data_fetched_from_state.products.error;
  // const Total_Product_count = Data_fetched_from_state.products.productsCount;

  // console.log(Listof_ALL_DB_Products,Total_Product_count)

  const Temp_product = {
    name: "Laptop",
    price: 3000,
    id: "LapTop",
    images: [
      {
        description: "1st Image source of Product",
        url: "../../Product Images/1.jpg",
      },
    ],
  };

 

 

  return (
    <>
     {
      loading?(<Loader/>):(<>
       <MetaData title="Ecommerce | Home" />
      <div className="Banner">
        <p>Welcome To Ecommerce</p>
        <h1>FIND THE AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="HomeHeading">Featured Products</h2>

      <div className="container" id="container">
        {/* {
                  product.map((product_item)=>{
                    return <ProductCard Product = {product_item} key={product_item._id} />
                  })
    
        } */}

       

        <ProductCard Product={Temp_product} />
      <ProductCard Product={Temp_product} />
      <ProductCard Product={Temp_product} />
      <ProductCard Product={Temp_product} />
      <ProductCard Product={Temp_product} />
      <ProductCard Product={Temp_product} />
      <ProductCard Product={Temp_product} />
      </div>
      </>)
     }
    </>
  );
};

export default Home;
