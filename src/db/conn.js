const mongoose=require("mongoose");

// creating db
mongoose.connect("mongodb://localhost:27017/dynamic",
{useCreateIndex:true,
useNewUrlParser:true,
useUnifiedTopology:true,
useFindAndModify:false
})
.then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("No connection");
})