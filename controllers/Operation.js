
const {Venue,VenueVendor} = require('../models/Venue.js')
/**
 * ROUTE : cant be decided
 * SECURITY : PUBLIC
 */
 const addVendorIn = async(req,res) => {
    try {
        // event or venue
        const variable = req.query.variable;
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 200
        });
    }
};

/**
 * ROUTE : cant be decided
 * SECURITY : PUBLIC
 */
 const updateVendorIn = async(req,res) => {
    try {
        // event or venue
        const variable = req.query.variable;
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 200
        });
    }
};

/**
 * ROUTE : cant be decided
 * SECURITY : PUBLIC
 */
 const deleteVendorIn = async(req,res) => {
    try {
        // event or venue
        const variable = req.query.variable;
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 200
        });
    }
};

module.exports = {addVendorIn,updateVendorIn,deleteVendorIn};