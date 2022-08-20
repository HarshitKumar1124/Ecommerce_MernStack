import {ADD_TO_CART} from "../Redux_Constants/CartConstant"
import React from 'react'
import axios from "axios"

export const AddItemInCard = (id,quantity)=> async (dispatch) =>{

    console.log("AADDD ITEMS AA GAYA")

   const {data} = await axios.get(`/api/v1/products/${id}`)
   

   console.log("ADD TO CART ",data)

   dispatch({
    type:ADD_TO_CART,
    payload:{
        productID:data.product._id,
        name:data.product.name,
        price:data.product.price,
        image:data.product.productImage[0].image_url,
        stock:data.product.stock,
        quantity
    },
   })

   //localStorage.setItem("cartItem",JSON.stringify(getState().cart.cardItem))


} 