const express = require('express');
const router = express.Router();
const Produto = require('../models/produto'); 


router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.status(200).json(produtos);
  } catch (err) {
    console.error("Erro ao buscar produtos:", err);
    res.status(500).json({ message: "Erro ao buscar produtos" });
  }
});

module.exports = router;
