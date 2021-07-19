// jshint esversion:9

const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
  orderIndex: Number,
  status: String,
  orderPlaced: Date,
  paymentMethod: String,
  shippingMethod: String,
  subtotal: Number,
  shippingCost: Number,
  total: Number,
  productId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});


module.exports = mongoose.model('Order', orderSchema);
