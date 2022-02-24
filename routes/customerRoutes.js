const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const Customer = require('../models/Customer');


router.get('',asyncHandler(async (req,res) => {

    try {
        console.log(req.params);
        const id = req.params.id;

        /*const customer = Customer.findById({id});

        if(customer) {
            res.send({
                customer: customer,
                status: 200
            })
        }
        else*/ res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}));

module.exports = router;