const {Event,EventZone,EventZoneVendor} = require('../models/Event');

/**
 * ROUTE : /api/vendor/zone/all
 * SECURITY : PUBLIC
 */
 const getAllZone = async(req,res) => {
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
 * ROUTE : /api/vendor/zone/id
 * SECURITY : PUBLIC
 */
 const getZone = async(req,res) => {
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
 * ROUTE : /api/vendor/zone/id
 * SECURITY : PRIVATE
 */
 const deleteZone = async(req,res) => {
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
 * ROUTE : /api/vendor/zone/id
 * SECURITY : PRIVATE
 */
 const updateZone = async(req,res) => {
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
 * ROUTE : /api/vendor/zone/id
 * SECURITY : PRIVATE
 */
 const addZone = async(req,res) => {
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
 * ROUTE : /api/vendor/zone/id
 * SECURITY : PRIVATE
 */
 const getZoneByEvent = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 200
        });
    }
};

module.exports = {getAllZone,getZone,deleteZone,updateZone,addZone,getZoneByEvent};