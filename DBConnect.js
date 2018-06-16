const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb://localhost:27017/carSell", function(err){
   if(err) throw err;
   console.log("Database is connected!");
});

module.exports = connection;

