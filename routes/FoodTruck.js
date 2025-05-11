
const express = require('express');
const router = express.Router();
const FoodTruck = require('../models/FoodTruck'); 


router.get('/', async (req, res) => {
  try {
    const foodTrucks = await FoodTruck.find(); 
    res.json(foodTrucks);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar Food Trucks' });
  }
});

module.exports = router;
