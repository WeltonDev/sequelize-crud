const express = require("express");
const routes = express.Router();
const carroController = require("../controllers/carroController");




  routes.get("/listar", carroController.listarCarros);
  routes.post("/criar", carroController.criarCarros);
  routes.delete("/:id/deletar", carroController.apagarCarros);
  routes.put("/:id/atualizar", carroController.atualizarCarros);


module.exports = routes;
