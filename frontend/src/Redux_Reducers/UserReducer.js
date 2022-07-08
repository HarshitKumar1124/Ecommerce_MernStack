// import { UserLOGIN_Request,UserLOGIN_fail,UserLOGIN_success, Clear_errors } from "../Redux_Constants/UserConstants";

import { UserLOGIN_Request,UserLOGIN_fail,UserLOGIN_success, Clear_errors ,UserREGISTER_Request,UserREGISTER_fail,UserREGISTER_success} from "../Redux_Constants/UserConstants";




export const userReducer = (state={Users:{}},action)=>{

    switch(action.type)
    {
        case UserLOGIN_Request:
        case UserREGISTER_Request:
            return{
                loading:true,
                isAuthenticated:false

            };
        case UserLOGIN_success:
        case UserREGISTER_success:    
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload

            };
        case UserLOGIN_fail:
        case UserREGISTER_fail:    
            return{
                ...state,
                loading:false,
                isAuthenticated:false,
                user:null,
                error:action.payload

            };
        case Clear_errors:
            return{
                ...state,
                error:null
            }
        default:
            return state
    }
}