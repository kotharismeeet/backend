const router = require('express').Router();
const {getToppings,createToppings,deleteToppings,updateToppings} = require('../controllers/Toppings');

router.get('/all',getToppings);
router.route('/:id').delete(deleteToppings).put(updateToppings);
router.post('',createToppings);

module.exports = route;