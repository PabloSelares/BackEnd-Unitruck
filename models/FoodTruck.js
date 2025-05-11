
const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  image: String,
  category: String,
  rating: Number,
  reviews: Number,
  type: String
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
