const mongoose=require("mongoose")
const validator=require("validator")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email Id")
            }
        }
    },
    password:{
        type:String,
        required:true
    }
    ,
    message:{
        type:String,
        required:true,
        minlength:3
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// collection
const User=mongoose.model("User",userSchema);

module.exports=User;