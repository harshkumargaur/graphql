const order = require('./order.model');

module.exports = {
    Query: {
        orders: () => {
            console.log('orders resolver');
            return order();
        }
    }
}