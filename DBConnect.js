const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/carSell',(err) => {
   if(err) throw err;
   console.log(`Database running connected`);
});