const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    "order": Object,
    "amount": Number,
    "date": Date
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order;
