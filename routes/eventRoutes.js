const router = require('express').Router();
const {getAll,getEvent,deleteEvent,updateEvent,addEvent,
    getAllLocation,getLocation,deleteLocation,updateLocation,addLocation,getLocationsByEvent,
    addVendorIn,updateVendorIn,deleteVendorIn} = require('../controllers/Event.js');

// event Routes - 5
/**
 * api/event
 */
router.get('/all',getAll);
router.route('/:id').get(getEvent).delete(deleteEvent).put(updateEvent);
router.post('',addEvent);

// Event Zone Routes - 6
/**
 *  api/event/location
 */
router.get('/location/all',getAllLocation);
router.route('/location/:id').get(getLocation).delete(deleteLocation).put(updateLocation);
router.post('/location',addLocation);

/*
 imp get zone of events
*/
router.get('/zones/:id',getLocationsByEvent);

// Event Zone Vendor Routes - 3
/**
 * api/event/zone/vendor/id
 */

router.route('/zone/vendor/:zoneId').post(addVendorIn).put(updateVendorIn).delete(deleteVendorIn);
module.exports = router;