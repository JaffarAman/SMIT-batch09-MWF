const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  otp_code: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  isUsed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const OTPModel = mongoose.model("otp", schema);

module.exports = OTPModel;
