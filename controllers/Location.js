const {EventLocation} = require('../models/Event');

/**
 * ROUTE : /api/vendor/zone/all
 * SECURITY : PUBLIC
 */
 const getAllLocation = async(req,res) => {
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
 const getLocation = async(req,res) => {
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
 const deleteLocation = async(req,res) => {
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
 const updateLocation = async(req,res) => {
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
 const addLocation = async(req,res) => {
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
 const getLocationsByEvent = async(req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.json({
            error,
            status: 200
        });
    }
};

module.exports = {getAllLocation,getLocation,deleteLocation,updateLocation,addLocation,getLocationsByEvent};