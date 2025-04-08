const express = require('express');
const router = express.Router();
const { MENU_LINKS } = require('../constants/navigation');

router.get('/', (req, res) => {
  res.render('index', {
    headTitle: 'Shop - Home',
    path: '/',
    menuLinks: MENU_LINKS,
    activeLinkPath: '/'
  });
});

module.exports = router;