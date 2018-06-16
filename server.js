const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const connection = require('./DBConnect');
const port = process.env.port || 1234;
const sellerroute = require('./routes/seller');
const carroute = require('./routes/car');

var app = express();

app.use(bodyparser.json());

app.use('/seller',sellerroute);
app.use('/car',carroute);


app.listen(port, (err) => {
   if(err) throw err;
   console.log(`Server running at ${port}`);
});