const express = require('express')

const router = express.Router();

const {NewOrder,getSingleOrder,MyOrder} = require("../controller/OrderController")


const {IsUserAuthenticated,AuthoriseRole} = require("../middleware/IsUserAuthenticated")



//Create New Order  --Logged In
router.route("/order/new").post(IsUserAuthenticated, NewOrder)


//To see specific order's details of user own   --Logged Inn
router.route("/order/:id").get(IsUserAuthenticated ,AuthoriseRole("admin"),getSingleOrder);


//See All Orders placed by User himself   --Logged Inn
router.route("/orders/Myorder").get(IsUserAuthenticated, MyOrder);


module.exports = router;