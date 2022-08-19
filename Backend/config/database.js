const mongoose = require("mongoose");

const connectDatabase=()=>{

    var DB_URI = "mongodb+srv://Harshitkr1124:Poonamsushil@harshitecommerce.8vfkeuv.mongodb.net/Ecommerce?retryWrites=true&w=majority";
    // "mongodb://localhost:27017/Ecommerce"
    mongoose.connect(DB_URI,{useNewURLParser:true}).then((data)=>{
        console.log(`MongoDB connected with the server: ${data.connection.host}`)}).catch((err)=>{
            console.log(`Error due to ${err}`);
        })
    


}
module.exports = connectDatabase;