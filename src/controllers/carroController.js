const bancoDeDados = require("../database");
const Modelo = require("../models/Modelo");

const carroController = {
  async listarCarros( req, res ){
    lista = await Modelo.findAll();
    res.json(lista);
  },

  async criarCarros( req, res ){
    const { Nome_Modelo, Ano_Modelo } = req.body;
    novoCarro = await Modelo.create({
      Nome_Modelo, Ano_Modelo
    });
    res.json(novoCarro);
   res.json(req.body)
   res.send(`Ola: ${JSON.stringify(req.body)}`);
  },

  async apagarCarros( req, res ){
    const { id } = req.params; // Utilizar params para pegar o parametro id da url

    await Modelo.destroy({
      where:{
        ID_Modelo: id,
      }
    });
    res.json("Veículo deletado!");
  },

  async atualizarCarros( req, res ){
    const { id } = req.params;
    const { Nome_Modelo, Ano_Modelo } = req.query;

    const carroAtualizado = await Modelo.update(
      {Nome_Modelo, Ano_Modelo },
      {
        where:{
          ID_Modelo: id,
        }
      }
    );

    res.json("Veículo Atualizado!");
  },

};

module.exports = carroController;