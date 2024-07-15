module.exports = {
    getCart: require('./getOrder.controller'),
    addOrder: require('./addToCart.controller.api'),
    removeOrder: require('./removeOrder.controller.api'),
    lessQuantity: require('./lessQuantity.controller.api'),
    moreQuantity: require('./moreQuantity.controller.api'),
    clear: require('./clearCart.controller.api'),
    completedOrder: require('./completedOrder.controller.api'),
    canceled: require('./canceledOrder.controller.api')

}