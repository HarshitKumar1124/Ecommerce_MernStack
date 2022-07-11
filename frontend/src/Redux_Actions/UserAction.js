import axios from 'axios'

import { UPDATE_PROFILE_Request,UPDATE_PROFILE_success,UPDATE_PROFILE_fail,UPDATE_PROFILE_Reset,LOGOUT_success,UserLOGIN_Request,UserLOGIN_fail,UserLOGIN_success,LoadUser_Request,LoadUser_fail,LoadUser_success, Clear_errors ,UserREGISTER_Request,UserREGISTER_fail,UserREGISTER_success, LOGOUT_fail} from "../Redux_Constants/UserConstants";

//LOGIN Action
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


//SignUp Action
export const userRegister = (UserData)=>async(dispatch)=>{

    try{
        dispatch({type: UserREGISTER_Request});
        console.log("userREGISTER post")
  
        const {data} =await axios.post(`/api/v1/register_user`,UserData);
       
        dispatch({
            type:UserREGISTER_success,
            payload:data.user
        })

    }
    catch(error)
    {
        dispatch({type:UserREGISTER_fail,payload:error.response.data.message})
    }

}




//Load User Action - this is meant to load the page directly to account page if a person is logged in.... rather them giving them login/signup option on that page
export const LoadUser = ()=>async(dispatch)=>{

    try{
        dispatch({type: LoadUser_Request});
        console.log("LoadUser post")

    

         
        const {data} =await axios.get(`/api/v1/MyProfile`);
       
        dispatch({
            type:LoadUser_success,
            payload:data.user
        })

    }
    catch(error)
    {
        dispatch({type:LoadUser_fail,payload:error.response.data.message})
    }

}


export const userLogOut =()=>async (dispatch)=>{

    console.log("Logout here")

    try{

    
    await axios.get(`/api/v1/logout_user`);
    
    dispatch({
        type:LOGOUT_success
    })

    }
    catch(error)
    {
        dispatch({type:LOGOUT_fail,payload:error.response.data.message})
    }
}



//Update Profile Action

export const userUpdate = (UserNEWData)=>async(dispatch)=>{

    try{
        dispatch({type: UPDATE_PROFILE_Request});
        console.log("UPDATE_PROFILE post")
  
        const {data} =await axios.put(`/api/v1/MyProfile/update`,UserNEWData);
       
        dispatch({
            type:UPDATE_PROFILE_success,
            payload:data.user
        })

    }
    catch(error)
    {
        dispatch({type:UPDATE_PROFILE_fail,payload:error.response.data.message})
    }

}




export const ClearError=()=>async(dispatch)=>{

    dispatch({
        type:Clear_errors
    })
}
