const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email Id")
      }
    }
  },
  institute: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true,
    minlength:10,
    maxlength:12
  },
  message: {
    type: String,
    required: true,
    minlength: 10
  },
  date: {
    type: Date,
    default: Date.now
  }
})

// collection
const User = mongoose.model("User", userSchema);

module.exports = User;
