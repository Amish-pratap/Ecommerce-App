const express = require('express');
const {validationResult}= require('express-validator');
const productosNewTemplate = require('../../views/admin/products/new');
const productsRepo= require('../../repositories/products');
const router = express.Router();
const {requireTitle , requirePrice} = require('./validators');

router.get('/admin/products', (req, res) => {});

router.get('/admin/products/new', (req, res) => {
    res.send(productosNewTemplate({}));
});

router.post('/admin/products/new', [requireTitle,requirePrice],(req,res)=>{
    const errors = validationResult(req);
    console.log(req.body);
    res.send('submitted');
})

module.exports = router;
