
const ErrorHandler = require('../utils/errorHandler')

const CatchAsyncErrors = require('../middleware/ErrorAsyncHandler')

const User = require('../UserModel/UserSchema')

const sendToken = require("../utils/JWTToken")

const fs = require('fs')

const mongoose=require('mongoose')


const sendRESETEmail = require('../utils/SendResetEmail')


//Using Crypto for ResetPassword feature for Token Hashing
const crypto = require('crypto') // build-in module in NODE


//Register a User

exports.RegisterUser=CatchAsyncErrors(async(req,res,next)=>{
    
    console.log("aaya")
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        profilePic:{
            public_ID:"userid",
            image_url:"imageURL"
        },
        visible_password:password

    });

    console.log(user)

    //TokenGeneration Using JWT

    // const token = user.getJWTToken();

    

    //  console.log("ss")
    sendToken(user,200,res);
});




//Login Already Registered User

exports.LoginUser = CatchAsyncErrors(async (req,res,next)=>{

    const inputEmail=req.body.email;
    const inputPassword=req.body.password;
    console.log(inputEmail,inputPassword)

    if(!inputEmail || !inputPassword){
        
        return next(new ErrorHandler("Please Enter the valid email or password",404));

    }

    const target_user = await User.findOne({email:inputEmail}).select('+password')

    console.log(target_user)
    

    if(!target_user){
        return next(new ErrorHandler("User Not Registered !",404));
    }



    const isPasswordMatch = await target_user.comparePassword(inputPassword);


    console.log("comparision: ", isPasswordMatch)

    if(!isPasswordMatch){
        return next(new ErrorHandler("Invalid email or password",401))
    
    }

     sendToken(target_user,200,res);


})



//LogOut User

exports.LogOutUser = CatchAsyncErrors(async(req,res,next)=>{

    const options={
        expires:new Date(Date.now()),
        httpOnly:true,
    }

    //terminate the stored token in cookie
    res.cookie('token',null,options)

    //******since using local_storage for cookies*************************** */
    //**we will empty the cookie_local_storage.txt file*************************** */

    fs.writeFile("cookie_local_storage.txt","",(err)=>{
        if(err)throw err;
    })



    res.status(200).json({
        success:true,
        message:"Logged Out Successfully"
    })
})


//User Forget Password

exports.forgotPassword = CatchAsyncErrors(async (req,res,next)=>{

    console.log(req.body.email)
    //search user whose email is given to which password reset is being done
    const user_target = await User.findOne({email:req.body.email})

    console.log("forgetpassword",user_target)


    if(!user_target)
    return next(new ErrorHandler("User Not Found",404));

    //Reseting Password by Token
    const TokenReset = user_target.getResetPasswordToken();


    console.log("reset token",TokenReset)

    await user_target.save({validateBeforeSave:false})
 

    console.log("saved with token reset password",user_target)



    const resetPasswordURL = `http://localhost:4000/api/v1/password/reset/${TokenReset}`
    //this line will work when runn on lcal but if we deloy the website then there mat be chances that 
    // "http" protocol may change to "https" and host name change from "localhost" to definite WEBSITE Name


// *****************************************************************************************************************
   
//This above resetPasswordLink can be generalised as: 
//const resetPasswordURL = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}` 

// ********************************************************************************************************************

    // it is the message written in mail in which reset link will be send to Given User Email ID

    const message = `Your password reset token is: \n\n ${resetPasswordURL}\n\n Please Ignore if its not you.`
    console.log(message)
    try{

        //If link is being used then do this:

        //sending link to  email
        console.log("try ",user_target.email)
        await sendRESETEmail({
            email:user_target.email,
            subject:`Ecommerce Reset Password`,
            message

        });

        res.status(200).json({
            success:true,
            message:`Email send to ${user_target.email} Successfully`
        })

    }
    catch(err){

        //If link is not being used then Remove the Temporary reset token and its expiring time from user_target
        
        user_target.resetPasswordToken = undefined;
        user_target.resetPasswordExpire = undefined;

        await user_target.save({validateBeforeSave: false});

        return next(new ErrorHandler(err.message,500));

    }





})




//ResetPassword when link has been generated and mailed

exports.resetPassword=CatchAsyncErrors(async(req,res,next)=>{


    
   const ResetPassword_requested = req.params.token;

   //since this ResetPassword_requested is needed to be searched in all user's resetPasswordToken String which is Hashed 
   //thus using crypto to compare ResetPassword_requested and all user's resetPasswordToken string in hashed form

   console.log("RESET PASSWORD AA GAYA",ResetPassword_requested)
   const ResetPasswordToken_Requested_hashed = crypto.createHash("sha256").update(ResetPassword_requested).digest("hex")

   console.log("RESET PASSWORD AA GAYA",ResetPasswordToken_Requested_hashed)



   const user_target = await User.findOne({

    resetPasswordToken: ResetPasswordToken_Requested_hashed,
    resetPasswordExpire:{ $gt: Date.now()}

   });

   if(!user_target)
   return next(new ErrorHandler("Reset Password Token is Invalid Or has expired",400))

   if(req.body.password !== req.body.confirmPassword)
   return next(new ErrorHandler("Password Fields Doesn't Matched",401))

   user_target.password = req.body.password;

   user_target.resetPasswordToken = undefined;
   user_target.resetPasswordExpire = undefined;

   await user_target.save({validateBeforeSave: false});

   //login automatically

   sendToken(user_target,200,res);


})