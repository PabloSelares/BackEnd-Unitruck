const express = require('express');
const router = express.Router();  // <-- DEFINIÇÃO DO ROUTER
const FoodTruck = require('../models/FoodTruck');
const Produto = require('../models//produto');  // não esqueça de importar o modelo Produto

// rota para listar todos os food trucks
router.get('/', async (req, res) => {
  try {
    const foodTrucks = await FoodTruck.find();
    res.json(foodTrucks);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar Food Trucks' });
  }
});

// rota para buscar food truck específico e seus produtos
router.get('/:id', async (req, res) => {
  try {
    const foodTruck = await FoodTruck.findById(req.params.id);
    if (!foodTruck) {
      return res.status(404).json({ erro: 'Food Truck não encontrado' });
    }
    const produtos = await Produto.find({ foodtruckId: foodTruck._id });
    res.json({
      ...foodTruck.toObject(),
      produtos
    });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar Food Truck e seus produtos' });
  }
});

module.exports = router;
