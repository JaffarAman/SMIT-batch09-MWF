const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  created_on: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_on: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const PostModel = mongoose.model("post", schema);

module.exports = PostModel;
