import { All_Product_Request,All_Product_fail,All_Product_success ,Clear_errors} from "../Redux_Constants/ProductConstants";


export const productReducer = (state={products:[]},action)=>{


    switch (action.type) {
        case All_Product_Request:
            
            return{
                loading:true,
                products:[]
            }
        case All_Product_fail:
        
            return{
                loading:false,
                error:action.payload
            }
        case All_Product_success:
        
            return{
                loading:false,
                error:action.payload.Allproducts,
                productsCount:action.payload.productsCount
            } 
        case Clear_errors:
    
                return{
                ...state,
                error:null
            }        
    
        default:
            return state;
    }
};

