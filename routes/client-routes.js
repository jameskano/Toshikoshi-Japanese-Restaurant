// jshint esversion:9

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Product = require('../models/products');
const Order = require('../models/orders');
const User = require('../models/users');


router.get('/', function(req, res) {
  Product.find({}, function(err, products) {
    if(err) {
      console.log(err);
    }
    else {
      res.render('index', {
        data: products
      });
    }
  });
});

router.get('/order', function(req, res) {
  Product.find({}, function(err, products) {
    if(err) {
      console.log(err);
    }
    else {
      res.render('order', {
        data: products
      });
    }
  });
});

router.get('/dashboard', function(req, res) {
  res.render('dashboard');
});

router.post('/reserve', function(req, res) {
  res.render('thanks-reserve');
});

router.post('/delivery', function(req, res) {
  res.render('thanks-delivery');
});

router.post('/dashboard', function(req, res) {
  res.render('dashboard');
});


module.exports = router;
