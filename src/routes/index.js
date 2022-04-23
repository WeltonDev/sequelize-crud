const express = require("express");
const routes = express.Router();
const carroController = require("../controllers/carroController");

  routes.get("/listar", carroController.listarCarros);

module.exports = routes;
