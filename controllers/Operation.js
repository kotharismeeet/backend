const {Event,EventZone,EventZoneVendor} = require('../models/Event.js');

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
 const updateVenodrIn = async(req,res) => {
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
 const deleteVenodorIn = async(req,res) => {
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

module.exports = {addVendorIn,updateVenodrIn,deleteVenodorIn};