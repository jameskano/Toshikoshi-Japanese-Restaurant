// jshint esversion:9

const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  phone: Number,
  birthday: Date,
  userAddress: {
    address: String,
    address2: Number,
    city: String,
    province: String,
    zipCode: Number,
    country: String,
    shippingAddress: Boolean,
    billingAddress: Boolean
  },
  orderId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order"
    }
  ]
});


module.exports = mongoose.model('User', userSchema);
