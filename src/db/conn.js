const mongoose = require("mongoose");
const express = require("express");
const app = express();
const User = require("../models/post");

// creating db
mongoose.connect("mongodb+srv://creator54:u4gmyE8zpQ2sdEq@cluster0.rzvyn.mongodb.net/blog-crud?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connection is successful");
  }).catch((e) => {
    console.log("No connection");
  })

  // User.find({},function(err,users){
  //   if(err)console.log(err);
  //   console.log(users)
  // })
