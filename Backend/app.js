const express= require("express");
const ErrorMiddleware = require("./middleware/error")

const app = express();

app.use(express.json());

//Route Import for Product

const product = require("./routes/productRoute");

app.use("/api/v1",product);

///////////////////////////////////

//Route Import for Users

const Users = require('./routes/UserRoute');

app.use('/api/v1',Users);

//Middleware for Errors 
app.use(ErrorMiddleware);


//Cookie Parser 
const cookieParser = require("cookie-parser")

app.use(cookieParser());

module.exports = app;