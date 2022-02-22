const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Customer = require('../models/Customer.js');
const generateToken = require('../utilities/generateToken.js');

const registerCustomer = asyncHandler (async (req,res) => {

    try {
        const {name,email,password,contactnum,isAdmin} = req.body;
        // Step 1 : Check body fields are not undefined and be careful with boolean
        if(!name || !email || !password || !contactnum) {
            console.log(name,email,password,contactnum,isAdmin);
            return res.sendStatus(401);
        }

        // Step 2 : Check weather it exists or not
        const customerExists = await Customer.findOne({email});

        if(customerExists) {
            return res.sendStatus(401);
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Step 3 : If dosen't exist enter in database
        const customer = await Customer.create({
            name,
            email,
            password: hashedPassword,
            contactnum,
            isAdmin
        });

        // Step 4 : Sends response as well as call utility function 
        if(customer) {
            return res.send({
                id: customer._id,
                name: customer.name,
                status: 200,
                token: generateToken(customer._id)
            });
        }
    } catch(error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

const loginCustomer = asyncHandler(async(req,res) => {
    try {
        const {email,password} = req.body;

        if(!email || !password) {
            console.log(email,password);
            res.sendStatus(401);
        }

        const customer  = await Customer.findOne({email});

        if(customer) {
            if(await bcrypt.compare(password,customer.password)) {
                return res.send({
                    id: customer._id,
                    name: customer.name,
                    status: 200,
                    token: generateToken(customer._id)
                });
            }
        }
        else return res.sendStatus(401);   
    } 
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }    
});

module.exports = {registerCustomer,loginCustomer};