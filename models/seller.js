const mongoose = require('Mongoose');

const sellerSchema = ({
   name : {
       type : String
   },
   email : {
       type : String
   },
   cars: [{
       type : mongoose.Schema.Types.ObjectId,
       ref : 'car'
   }]

});

module.exports = mongoose.model('Seller',sellerSchema,'carsellers');