const mongoose = require("mongoose");
//create a schema structure
const productSchema = new mongoose.Schema({
    exercise :{
        type:String,
        required:true,
        trim:true
    },
    sets:{
        type:Number,
        required:true,
        min:1,
        max:20
    },
    muscleGroup:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now
    }
},
);

module.exports =mongoose.model("Product",productSchema)