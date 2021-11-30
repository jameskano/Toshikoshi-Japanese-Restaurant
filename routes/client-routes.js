// jshint esversion:9

const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

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

router.get('/cart', function(req, res) {
  res.render('cart-checkout/cart');
});

router.post('/reserve', function(req, res) {
  res.render('additional-ui-items/thanks-reserve');
});

router.post('/delivery', function(req, res) {
  res.render('additional-ui-items/thanks-delivery');
});

router.post('/dashboard', function(req, res) {
  res.render('dashboard');
});

router.post('/checkout', function(req, res) {
  // Code to use the data received from cart

  res.render('cart-checkout/checkout')
});

router.post('/payment', function(req, res) {
  // Code to use the data received from checkout

  res.render('cart-checkout/payment')
});

router.post('/email', function(req, res) {
  // Instantiate the SMTP server
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'login',
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  // How the email looks like
  let emailOpts = {
    from: 'Sender', // This is ignored by Gmail
    to: process.env.GMAIL_USER,
    subject: 'New message to Toshikoshi Restaurant',
    text: `    Name: ${req.body.contactName}
    Email: ${req.body.contactEmail}
    Phone: ${req.body.contactPhone}
    Message: ${req.body.contactMessage}`
  };

  // Attempt to send the email
  transporter.sendMail(emailOpts, (err, response) => {
    if (err) {
      console.log(err);
      res.send("2");
    }
    else {
      console.log('Message sent successfully');
      res.send("1");
    }
  });
});


module.exports = router;
