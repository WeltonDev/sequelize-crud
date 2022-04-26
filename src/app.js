const express = require("express");
const routes = require("./routes");
const bancoDeDados = require("./database");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(routes);
  app.use(express.json());
  bancoDeDados.possuiConexao();
  app.post("/produto", ( req, res)=>{
    console.log(req.body);
    res.send(`O que você enviou foi ${req.body}`)
  });

app.listen(3000, ()=>{ console.log("Servidor rodando na porta 3000!"); });