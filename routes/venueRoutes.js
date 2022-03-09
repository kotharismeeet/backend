const router = require('express').Router();
const {getAll,getVenue,deleteVenue,updateVenue,createVenue,addVendorIn,updateVendorIn,deleteVendorIn}
= require('../controllers/Venue');

/**
 * 5 Routes for Venue
 * api/venue/
 */
router.get('/all',getAll);
router.route('/:id').get(getVenue).delete(deleteVenue).put(updateVenue);
router.post('',createVenue);

/**
 * api/venue/vendor/id
 */
 router.route('vendor/:eventId').post(addVendorIn)
        .put(updateVendorIn)
        .delete(deleteVendorIn);

module.exports = router;