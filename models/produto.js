const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  type: String,
  image: String
});

module.exports = mongoose.model('Produto', ProdutoSchema);
