const express = require('express');
const productosNewTemplate = require('../../views/admin/products/new');
const productsRepo= require('../../repositories/products');
const router = express.Router();

router.get('/admin/products', (req, res) => {});

router.get('/admin/products/new', (req, res) => {
    res.send(productosNewTemplate({}));
});

module.exports = router;
