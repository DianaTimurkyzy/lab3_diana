const express = require('express');
const router = express.Router();
const { MENU_LINKS } = require('../constants/navigation');

router.get('/', (req, res) => {
  res.render('logout', {
    headTitle: 'Shop - Logout',
    path: '/logout',
    menuLinks: MENU_LINKS,
    activeLinkPath: '/logout'
  });
});

module.exports = router;