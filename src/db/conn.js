const mongoose = require("mongoose");
const express = require("express");
const app = express();
const User = require("../models/post");

// creating db
mongoose.connect("mongodb://localhost:27017/blog-crud", {
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