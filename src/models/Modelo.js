const bancoDeDados = require("../database/index");
const { DataTypes } = require("sequelize");

const Modelo = bancoDeDados.define("Modelo",
  {
    ID_Modelo: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
      notNull: true,
    },
    Nome_Modelo: {
      type: DataTypes.STRING,
    },
    Ano_Modelo: {
      type: DataTypes.SMALLINT,
    }
  },
  {
    tableName: "modelo",
    timestamps: false,
  });

  module.exports = Modelo;