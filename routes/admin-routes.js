// jshint esversion:9

const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const Product = require('../models/products');
const Order = require('../models/orders');
const User = require('../models/users');


module.exports = router;
