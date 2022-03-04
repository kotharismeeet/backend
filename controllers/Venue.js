const {Venue,VenueVendor} = require('../models/Venue');

/**
 * 
 */

const getAll = async(req,res) => { 
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        });
    }
};

/**
 * 
 */

const getVenue = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};

/**
 * 
 */

 const deleteVenue = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};

/**
 * 
 */

 const updateVenue = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};

/**
 * 
 */

 const createVenue = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 500
        })
    }
};

const {addVendorIn,updateVenodrIn,deleteVenodorIn} = require('./Operation.js');

module.exports = {getAll,getVenue,deleteVenue,updateVenue,createVenue,addVendorIn,updateVenodrIn,deleteVenodorIn};