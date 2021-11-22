const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    customername: String,
    username: String,
    email: String,
    phone: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;