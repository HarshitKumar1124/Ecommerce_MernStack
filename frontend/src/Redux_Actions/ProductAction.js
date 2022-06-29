import axios from "axios"
import { All_Product_Request,All_Product_fail,All_Product_success ,Clear_errors} from "../Redux_Constants/ProductConstants";


export const getProduct = async(dispatch)=>{

    try{

        dispatch({
            type:All_Product_Request
        })

        console.log("ssssss")
        const ProductsDB= await axios.get("/api/v1/products")
    
        // console.log(ProductsDB )
         console.log(ProductsDB.data)
        
        console.log(ProductsDB.data.Allproducts)

       

        dispatch({
            type:All_Product_success,
            payload: ProductsDB.data
        })

    }catch(error)
    {

       console.log("err",error)

        dispatch({
            type:All_Product_fail,
            payload: error.response.data.message,

            
        })
    }
}


export const ClearError=()=>async(dispatch)=>{

    dispatch({
        type:Clear_errors
    })
}