const router = require('express').Router()
const { getCart, addOrder, removeOrder, moreQuantity, lessQuantity, canceled, completedOrder } = require('../../controllers/api/cart')

router.get('/', getCart)
router.patch('/add/:id', addOrder)
router.patch('/remove/:id', removeOrder)
router.patch('/more/:id', moreQuantity)
router.patch('/less/:id', lessQuantity)
router.delete('/canceled', canceled)
router.patch("/completed", completedOrder);






module.exports = router