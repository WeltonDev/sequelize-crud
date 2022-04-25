const bancoDeDados = require("../database");
const Modelo = require("../models/Modelo");

const carroController = {
  async listarCarros( req, res ){
    lista = await Modelo.findAll();
    res.json(lista);
  },

  async criarCarros( req, res ){
    const { Nome_Modelo, Ano_Modelo } = req.query;
    novoCarro = await Modelo.create({
      Nome_Modelo, Ano_Modelo
    });
    res.json(novoCarro);
  },

  async apagarCarros( req, res ){
    const { id } = req.params;

    await Modelo.destroy({
      where:{
        ID_Modelo: id,
      }
    });
    res.json("Veículo deletado!");
  }
};

module.exports = carroController;