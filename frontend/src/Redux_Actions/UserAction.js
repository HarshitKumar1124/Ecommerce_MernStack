import axios from 'axios'

import { UserLOGIN_Request,UserLOGIN_fail,UserLOGIN_success, Clear_errors } from "../Redux_Constants/UserConstants";


export const userLogin = (email,password)=>async(dispatch)=>{

    try{
        dispatch({type: UserLOGIN_Request});
        console.log("userlogin post")

    

         
        const {data} =await axios.post(`/api/v1/login_user`,{email,password});
       
        dispatch({
            type:UserLOGIN_success,
            payload:data.user
        })

    }
    catch(error)
    {
        dispatch({type:UserLOGIN_fail,payload:error.response.data.message})
    }

}

export const ClearError=()=>async(dispatch)=>{

    dispatch({
        type:Clear_errors
    })
}
