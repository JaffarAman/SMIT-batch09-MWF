const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  full_name: String,
  age: Number,
  email: String,
});

const UserModel = new mongoose.model("xyzs", schema);

module.exports = UserModel;
