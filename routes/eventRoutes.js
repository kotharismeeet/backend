const router = require('express').Router();
const {getAll,getEvent,deleteEvent,updateEvent,addEvent,
    getAllZone,getZone,deleteZone,updateZone,addZone,getZoneByEvent,
    addVendorIn,updateVenodrIn,deleteVenodorIn} = require('../controllers/Event.js');

// event Routes - 5
/**
 * api/event
 */
router.get('/all',getAll);
router.route('/:id').get(getEvent).delete(deleteEvent).put(updateEvent);
router.post('',addEvent);

// Event Zone Routes - 6
/**
 *  api/event/zone
 */
router.get('/zone/all',getAllZone);
router.route('/zone/:id').get(getZone).delete(deleteZone).put(updateZone);
router.post('/zone',addZone);

/*
 imp get zone of events
*/
router.get('/zones/:id',getZoneByEvent);

// Event Zone Vendor Routes - 3
/**
 * api/event/zone/vendor/id
 */

router.route('/zone/vendor/:zoneId').post(addVendorIn).put(updateVenodrIn).delete(deleteVenodorIn);
module.exports = router;