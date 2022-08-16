const produtos = require('../dados/dado.js');

class ProdutoController {
  static listarProdutos = (req, res) => {
    res.status(200).json(produtos);
  };
}

module.exports = ProdutoController;
