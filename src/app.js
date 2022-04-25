const express = require("express");
const routes = require("./routes");
const bancoDeDados = require("./database");
const cors = require("cors")

const app = express();
  app.use(cors());
  app.use(routes);
  app.use(express.json());
  bancoDeDados.possuiConexao();

app.listen(3000, ()=>{ console.log("Servidor rodando na porta 3000!"); });