const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  type: String,
  image: String,
   foodtruckId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodTruck'
  }
});

module.exports = mongoose.model('Produto', ProdutoSchema);
