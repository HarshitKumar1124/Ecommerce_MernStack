import {ADD_TO_CART} from "../Redux_Constants/CartConstant"

export const CartReducer =(state={cartItem:[]},action)=>{

    switch(action.type)
    {
        case ADD_TO_CART:
            const item_to_add = action.payload;

     
            const isItemExist = state.cartItem.find((element)=> element.productID=== item_to_add.productID)
                      

            console.log("HII REDUCER")
            if(isItemExist)
            {
                return {
                    ...state,
                    cartItem:state.cartItem.map((i)=>i.productID===isItemExist.productID ? item_to_add:i)
                }
            }
            else
            {
                return {
                    ...state,
                    cartItem:[...state.cartItem,item_to_add]
                }
            }
    
    
    
        default:
            return {
                ...state
            }
    }
}