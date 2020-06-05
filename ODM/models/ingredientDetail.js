const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientDetailSchema = new Schema({
    "ingredientName": String,
    "cost": Number
})

const IngredientDetail = mongoose.model('IngredientDetail', IngredientDetailSchema)

module.exports = IngredientDetail;
