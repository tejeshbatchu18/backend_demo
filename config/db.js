const mongoose = require("mongoose");

const connectDB=async()=>{
    try{
        const connection= await mongoose.connect(process.env.MONGODB_URI);
        //console.log(connection);
        console.log("DataBase Connected Successfully");
    }
    catch(err){
        console.log("Connection Failed!");
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB;