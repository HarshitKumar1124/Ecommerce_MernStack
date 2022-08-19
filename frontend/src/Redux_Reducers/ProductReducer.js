import { CgOptions } from "react-icons/cg";
import { All_Product_Request,
    All_Product_fail,
    All_Product_success ,
    Clear_errors,
    Product_Details_Request,
    Product_Details_fail,
    Product_Details_success,
    Add_Product_Request,
    Add_Product_fail,
    Add_Product_success,
    Add_Product_Reset,
    ADMIN_All_Product_Request,
    ADMIN_All_Product_success,
    ADMIN_All_Product_fail,
    DELETE_Product_Request,
    DELETE_Product_success,
    DELETE_Product_fail,DELETE_Product_Reset} from "../Redux_Constants/ProductConstants";


export const productReducer = (state={products:[]},action)=>{


    switch (action.type) {
        case All_Product_Request:
        case ADMIN_All_Product_Request:
            
            return{
                loading:true,
                product:[{}],
                productsCount:0

            }

        case All_Product_fail:
        case ADMIN_All_Product_fail:
        
            return{
                loading:false,
                error:action.payload
            }
        case All_Product_success:
        
            return{
                loading:false,
                product:action.payload.Allproducts,
                productsCount:action.payload.productsCount,
                ProductToShow_PerPage:action.payload.ProductToShow_PerPage,
                filterTotalCountProduct:action.payload.filterTotalCountProduct
            } 
        case ADMIN_All_Product_success:
        
            return{
                loading:false,
                product:action.payload.Allproducts
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

export const productDetailsReducer = (state={products:{}},action)=>{


    switch (action.type) {
        case Product_Details_Request:
            
            return{
                loading:true,
                ...state,
            }

        case Product_Details_fail:
        
            return{
                loading:false,
                error:action.payload
            }
        case Product_Details_success:
        
            return{
                loading:false,
                productDetail:action.payload
                
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


export const New_Product_Reducer=(state={product:{}},action)=>{

    switch(action.type)
    {
        case Add_Product_Request:
            return {
                ...state,
                loading:true,
            };
        case Add_Product_success:
            return{
                loading:false,
                success:action.payload.success,
                product:action.payload.product
            };
        case Add_Product_fail:
            return{
                ...state,
                loading:false,
                error:action.payload
            };
            case Add_Product_Reset:
                return{
                    ...state,
                    success:false
                };
        case Clear_errors:
            return{
                ...state,
                error:null,
            };
        default:
            return state;

    }


}



export const DeleteProduct_Reducer=(state={},action)=>{

    switch(action.type)
    {
        case DELETE_Product_Request:
            return {
                ...state,
                loading:true,
            };
        case DELETE_Product_success:
            return{
                ...state,
                loading:false,
                isDeleted:action.payload
               
            };
        case DELETE_Product_fail:
            return{
                ...state,
                loading:false,
                error:action.payload
            };
            case DELETE_Product_Reset:
                return{
                    ...state,
                    isDeleted:false
                };
        case Clear_errors:
            return{
                ...state,
                error:null,
            };
        default:
            return state;

    }


}
