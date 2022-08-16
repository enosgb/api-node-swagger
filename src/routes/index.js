const express = require('express');
const produtos = require('./produtoRoutes.js');
routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ message: 'ok' });
  });

  app.use(express.json(), produtos);
};

module.exports = routes;
