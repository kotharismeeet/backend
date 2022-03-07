const router = require('express').Router();
const {getVariants, createVariants, deleteVariants, updateVariants} = require('../controllers/Variants');

router.get('/all',getVariants);
router.route('/:id').delete(deleteVariants).put(updateVariants);
router.post('',createVariants);

module.exports = router;