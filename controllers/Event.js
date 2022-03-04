const {Event,EventZone,EventZoneVendor} = require('../models/Event');

/**
 * ROUTE : /api/vendor/all
 * SECURITY : PUBLIC
 */
const getAll = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 200
        });
    }
};

/**
 * ROUTE : /api/vendor/id
 * SECURITY : PUBLIC
 */
 const getEvent = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 200
        });
    }
};

/**
 * ROUTE : /api/vendor/id
 * SECURITY : PRIVATE
 */
 const deleteEvent = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 200
        });
    }
};

/**
 * ROUTE : /api/vendor/all
 * SECURITY : PRIVATE
 */
 const updateEvent = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 200
        });
    }
};

/**
 * ROUTE : /api/vendor/all
 * SECURITY : PUBLIC
 */
 const addEvent = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 200
        });
    }
};

const {getAllZone,getZone,deleteZone,updateZone,addZone,getZoneByEvent}
= require('./Zone.js');

const {addVendorIn,updateVenodrIn,deleteVenodorIn} = require('./Operation.js');

module.exports = {getAll,getEvent,deleteEvent,updateEvent,addEvent,
    getAllZone,getZone,deleteZone,updateZone,addZone,getZoneByEvent,
    addVendorIn,updateVenodrIn,deleteVenodorIn};