const CatchAysncError = require('../middleware/ErrorAsyncHandler')

const ErrorHandler = require("../utils/errorHandler");

const Order = require("../models/OrderModel");

const Product = require("../models/productModel");

const User = require("../UserModel/UserSchema");



exports.NewOrder = CatchAysncError(async(req,res,next)=>{

    const {shippingInfo ,OrderItem,paymentInfo, ItemPrice,taxPrice,ShippingPrice,TotalPrice} = req.body;
    
    const order_Instance = await Order.create({
       shippingInfo,
       OrderItem,
       paymentInfo,
       ItemPrice,
       taxPrice,
       ShippingPrice,
       TotalPrice,
       paidAt: Date.now(),
       user:req.user.id
    })



    res.status(200).json({
        success:true,
        message:"Order Placed !"
    })


})



//Get Single Order details    --Logged Only   (Khud Ka order dekhna ho user ko to)
exports.getSingleOrder = CatchAysncError(async(req,res,next)=>{

    const target_order = await Order.findById(req.params.id).populate('user','name email');
    //here Populate functions takes value of field of "user" present in target_order , i.e. person who created that order.
    //populate function fetches the user id from target_order and then goes into user database and fetch "name and email" field value of field of that Particular User who placed that order

   
    if(!target_order)
    return next(new ErrorHandler("Order ID Not Found",401));

    res.status(200).json({
        success:true,
        target_order
    })



})

//see all order of user own     --Logged Inn
exports.MyOrder = CatchAysncError(async(req,res,next)=>{

    const myorders = await Order.find({user:req.user._id})

    if(!myorders)
    return next(new ErrorHandler("No Orders Placed Yet",401));

    res.status(200).json({
        success:true,
        myorders
    })



})