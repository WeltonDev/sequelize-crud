const bancoDeDados = require("../database");
const Modelo = require("../models/Modelo");

const carroController = {
  async listarCarros( req, res ){
    lista = await Modelo.findAll();
    res.json(lista);
  }
};

module.exports = carroController;