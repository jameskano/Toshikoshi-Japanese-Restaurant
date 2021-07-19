// jshint esversion:9

const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  type: String,
  title: String,
  description: String,
  price: String,
  image: String
});


module.exports = mongoose.model('Product', productSchema);
