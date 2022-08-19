import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Add_Product_Page.css"
import {ClearError, CreateProduct} from "../../Redux_Actions/ProductAction.js"
import MetaData from '../Layout/MetaData'
import {  useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { Add_Product_Reset } from '../../Redux_Constants/ProductConstants'

const Add_ProductPage = () => {

    
    const dispatch = useDispatch();

    const alert = useAlert();

    const Navigate = useNavigate()

    let loading=true;
    let error = false;
    let success=false;

    useEffect(()=>{

        
        if(error)
        {
            alert.error(error);
            dispatch(ClearError());
        }

        if(success)
        {
            alert.success("Product Created Successfully !")
            dispatch({type:Add_Product_Reset})
            Navigate("/dash_board")
        }

    },[dispatch,alert,error,success,Navigate])


   
  
    const [Product_Detail,setProduct_Detail] = useState({
        name:"",
        description:"",
        price:0,
        category:"",
        stock:1
    })


    const InputDetail=(e)=>{
     
        setProduct_Detail({...Product_Detail,[e.target.name]:[e.target.value]})
    }
 
    const SubmitDetails=(e)=>{


        e.preventDefault();

        const productInfo ={
            "name":Product_Detail.name.toString(),
            "description":Product_Detail.description.toString(),
            "price":Product_Detail.price.toString(),
            "category":Product_Detail.category.toString(),
            "stock":Product_Detail.stock.toString(),
        }

        console.log(productInfo)

        dispatch(CreateProduct(productInfo));

        setProduct_Detail({name:"",
        description:"",
        price:0,
        category:"",
        stock:1})

        alert.success("Product Added !")

        Navigate("/dash_board")

        
    }

      





  return (


    
    <>
    <MetaData title="Create Product"/>
    
    <div className='Add_Product_Detail'>

        <div className='Add_Product_Details'>
 
           <label for="product_name" >
            Product Name<br/>
           <input type="text" placeholder="Enter Product Name" id="product_name" onChange={InputDetail} name="name" value={Product_Detail.name}/>
           </label>

           <label for="product_description" >
           Description<br/>
           <input type="textarea" placeholder='Write Some Description !' id="product_description"  onChange={InputDetail} value={Product_Detail.description} name="description"/>
           </label>

          <label for="product_price">
           Price<br/>
           <input type="number" placeholder='000' onChange={InputDetail} value={Product_Detail.price} name="price"/>
           </label>
           
           <label for="product_category">
           Category<br/>
           
           <select id="product_category" placeholder='Choose Category'  onChange={InputDetail} value={Product_Detail.category} name="category">
            <option value="Beast">Beast</option>
            <option value="Footwear">Footwear</option>
            <option value="Angel">Angel</option>
            <option value="Tops">Tops</option>
            <option value="Attire">Attire</option>
            <option value="Camera">Camera</option>
            <option value="SmartPhones">SmartPhones</option>
           </select>
           </label>

           <label for="product_stock">
           Current Stock<br/>
           <input type="number" placeholder='00' id="product_stock"  onChange={InputDetail} value={Product_Detail.stock} name="stock"/>
           </label>

           <input type="submit" onClick={SubmitDetails}/>
      


        </div>

    </div>
    </>
  )
}

export default Add_ProductPage