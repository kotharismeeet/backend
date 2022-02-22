const express = require('express');
const router = express.Router();
const {registerCustomer,loginCustomer} = require('../controllers/registerCustomer.js');

router.post('/signup', registerCustomer);
router.post('/login',loginCustomer);

module.exports = router;