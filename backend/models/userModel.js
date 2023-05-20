const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type: String,
    required: [true,"Please Add a name"]
},
    email:{
        type: String,
    required: [true,"Please Add an email"]
},
    password:{
        type: String,
    required: [true,"Please Add a Password"]
},

},{timestamps:true})


module.exports=mongoose.model('User',userSchema)