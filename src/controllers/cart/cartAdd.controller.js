const { Order, OrderItem, Product, sequelize } = require('../../database/models');

module.exports = async (req, res) => {
    const userLogin = res.locals.userLogin;

    if (!userLogin) {
        return res.status(403).json({ error: 'Debes iniciar sesión para agregar productos al carrito' });
    }

    const productId = req.params.id;
    const { id } = req.session.userLogin;

    try {
        // Iniciar una transacción
        const result = await sequelize.transaction(async (t) => {
            const product = await Product.findByPk(productId, { transaction: t });
            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            // Crear una orden nueva o obtener la existente
            let order = await Order.findOne({ where: { id, status: 'pending' }, transaction: t });
            if (!order) {
                order = await Order.create({ id, status: 'pending', total: 0 }, { transaction: t });
            }

            // Agregar el producto a la orden
            let orderItem = await OrderItem.findOne({ where: { orderId: order.id, productId }, transaction: t });
            if (orderItem) {
                orderItem.quantity += 1;
                await orderItem.save({ transaction: t });
            } else {
                orderItem = await OrderItem.create({
                    orderId: order.id,
                    productId,
                    quantity: 1,
                    price: product.price
                }, { transaction: t });
            }

            // Actualizar el stock del producto
            product.stock -= 1;
            await product.save({ transaction: t });

            // Calcular el nuevo total de la orden
            const items = await OrderItem.findAll({ where: { orderId: order.id }, transaction: t });
            order.total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            await order.save({ transaction: t });

            return order;
        });

        // Redireccionar a la página de productos después de la transacción
        res.redirect('/productos');
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ error: 'Error al agregar el producto al carrito' });
    }
};
