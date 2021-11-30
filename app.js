// jshint esversion:9

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

const app = express();

const clientRoutes = require('./routes/client-routes');
const adminRoutes = require('./routes/admin-routes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));


mongoose.connect('mongodb+srv://admin-jaime:pass-jaime@cluster0.udtqq.mongodb.net/toshikoshiRestaurant?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});


app.get('/favicon.ico', function(req, res) { res.status(204); });

app.use(clientRoutes);

app.use(adminRoutes);

app.use(function(req, res, next) {
  res.status(404);

  res.render('additional-ui-items/404');
});


app.listen(process.env.PORT || 3000, function() {
  console.log('Server running on port 3000');
});
