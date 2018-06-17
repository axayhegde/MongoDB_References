const express = require('express');
const Seller = require('../models/seller');
const router = express.Router();

router.route('/').get(async (req, res) => {
    let seller;
    try {
        seller = await Seller.find({});

    } catch (e) {
        console.log(e);
    }
    res.json(seller);

}).post(async (req, res) => {
    let newSeller = new Seller(req.body);
    try {
        await newSeller.save();
    } catch (err) {
        console.log(err);
    }
    res.json(newSeller)
});

module.exports = router;