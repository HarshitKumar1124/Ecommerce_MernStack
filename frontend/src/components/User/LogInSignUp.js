import React, { useState,Fragment,useRef } from 'react'
import {Link} from 'react-router-dom'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import './LoginSignup.css'

const LogInSignUp = () => {

   const logInTab = useRef(null);
   const switcherTab = useRef(null);
   const registerTab = useRef(null);


   const switchTab=(e,tab)=>{

    if(tab==='logIn')
    {
        switcherTab.current.classList.add('shiftToNeutral')
        switcherTab.current.classList.remove('shiftToRight')
        logInTab.current.classList.add('shiftToNeutralForm')
        registerTab.current.classList.add('shiftToNeutral')
    }
    else if(tab==='signUp')
    {
        switcherTab.current.classList.add('shiftToRight')
        switcherTab.current.classList.remove('shiftToNeutral')
        registerTab.current.classList.add('shiftToNeutralForm')
        logInTab.current.classList.add('shiftToLeft')
    }

   }

    const logInSubmit=()=>{
        console.log("LoginSubmit")
    }

    const [logInEmail,setLogInEmail] =useState('');
    const [logInPassword, setLogInPassword] = useState('')

    // For Encrypted Password
    const [visibility,setvisibility] = useState(0);
    const [state_password,setState] = useState('password');

    const changeVisibility=(event)=>{

        if(visibility==0)
        {
            setState('text')
            setvisibility(1);

        }
        else 
        {
            setState("password")
            setvisibility(0);
            
        }


    }

  return (
    <Fragment>
        <div className='LoginSignupContainer'>

            <div className='LoginSignUpBox'>

                <div style={{border:"1px dotted blue"}}>
                    <div className='login-signup-toggle'>

                        <p onClick={(e)=>switchTab(e,'logIn')}>LOGIN</p>
                        <p onClick={(e)=>switchTab(e,'signUp')}>SIGNUP</p>

                    </div>
                    <button ref={switcherTab} className="LoginSignUp_Switch-Button"></button>
                </div>

                <form onSubmit={logInSubmit} ref={logInTab} className='logInForm'>
                    <div className='logInEmail'>
                        <MailOutlineIcon/>
                        <input
                        type="text"
                        placeholder='Email'
                        required
                        value={logInEmail}
                        onChange={(e)=>setLogInEmail(e.target.value)}/>

                    </div>

                    <div className='logInPassword'>
                        <LockOpenIcon/>
                        <input
                        type={state_password}
                        placeholder='Password'
                        required
                        value={logInPassword}
                        onChange={(e)=>setLogInPassword(e.target.value)}
                        />
                        {(visibility==0)?<VisibilityOffIcon onClick={changeVisibility}/>:<VisibilityIcon style={{color:"dodgerblue"}} onClick={changeVisibility}/>}
                    </div>

                    <Link to="/password/forget">Forget Password ??</Link>
                    <input type="submit" value="Login" className='logInButton' />
                </form>

            </div>

        </div>
    </Fragment>
  )
}

export default LogInSignUp