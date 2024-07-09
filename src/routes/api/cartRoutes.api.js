const router = require('express').Router()
const {} = require('../../controllers/api/cart')

router.get('/', getCart)
router.patch('/add-product', addCart)
router.patch('/remove-product', removeCart)
router.patch('/more-quantity', moreQuantity)
router.patch('/less-quantity', lessQuantity)
router.delete('/remove-cart', deleteCart)






module.exports = router