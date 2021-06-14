const mongoose = require("mongoose")
// const validator = require("validator")

const postSchema = mongoose.Schema({
    postname: {
    type: String,
    required: true,
    minlength: 3
  },
  content: {
    type: String,
    required: true,
  },
  conclusion: {
    type: String,
    required: true,
    minlength: 5
  },
  category: {
    type: String,
    required: true,
    minlength: 3
  }
})

// collection
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
