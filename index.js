const express = require('express');
const mongoose = require('mongoose');
const body = require('body-parser');

const db = require('./DBConnect');
const port = process.env.port || 1234;

const app = express();

app.use(body.json());
app.use(body.urlencoded({extended: true}));


app.listen((port), (err) => {
    if (err) throw err;
    console.log(`Server Running at port  ${port}`);
});