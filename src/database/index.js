const Sequelize = require("sequelize");

const DB_NAME = "carros";
const DB_USER = "welton";
const DB_PASS = "BuyandHold26@";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

let bancoDeDados = {};

try {
  bancoDeDados = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Falha ao tentar conectar banco de dados!");
}

async function possuiConexao(){
  try{
  await bancoDeDados.authenticate();
  console.log("BANCO DE DADOS CONECTADO!");
  }catch(error){
    console.error("Falha ao tentar conectar banco de dados!");
  }
}

Object.assign(bancoDeDados, { possuiConexao });

module.exports = bancoDeDados;