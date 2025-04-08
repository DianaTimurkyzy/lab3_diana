const express = require('express');
const router = express.Router();
const { productsSlice } = require('../store/products');
const { MENU_LINKS } = require('../constants/navigation');

router.get('/', (req, res) => {
    res.render('products', {
        headTitle: 'Shop - Products',
        path: '/products',
        menuLinks: MENU_LINKS,
        activeLinkPath: '/products',
        products: productsSlice.products
    });
});

router.get('/add', (req, res) => {
    res.render('add-product', {
        headTitle: 'Shop - Add Product',
        path: '/products/add',
        menuLinks: MENU_LINKS,
        activeLinkPath: '/products/add'
    });
});

router.post('/add', (req, res) => {
    const newProduct = {
        name: req.body.name,
        description: req.body.description
    };
    productsSlice.newestProduct = newProduct;
    productsSlice.products.push(newProduct);
    res.redirect('/products/new');
});

router.get('/new', (req, res) => {
    res.render('new-product', {
        headTitle: 'Shop - Newest Product',
        path: '/products/new',
        menuLinks: MENU_LINKS,
        activeLinkPath: '/products/new',
        newestProduct: productsSlice.newestProduct
    });
});

module.exports = router;