const express = require('express');
const router = express.Router();
const {getCustomerById, getCustomers, deleteCustomerById,registerCustomer, updateCustomer,setCustomerMore} = require('../controllers/Customer.js');

router.get('', getCustomerById);
router.get('/all',getCustomers);
router.delete('',deleteCustomerById);
router.post('',registerCustomer);
router.put('',updateCustomer);

router.post('/more',setCustomerMore);

module.exports = router;