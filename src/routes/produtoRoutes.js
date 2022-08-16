const express = require('express');
const ProdutoController = require('../controllers/produtosController.js');
const router = express.Router();

router.get('/produtos', ProdutoController.listarProdutos);

module.exports = router;
