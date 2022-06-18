const express = require('express')
const router = express.Router();
const {Product} = require('../models/product');


router.get(`/`,async function (req,res) {
    const productList  = await Product.find();
    if (!productList) {
        res.status(500).json({success:false})
    }
    res.send(productList)
})


router.post(``,(req,res)=> {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    });
    product.save().then((createdProduct)=> {
        res.status(201).json(createdProduct)
    }).catch(e=> {
        res.status(500).json({
            error : e,
            success: false
        })
    })
})

module.exports = router;
