const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

var usuarios=[
  {
    nome: "Clebinho",
    endereco: "Rua 3, Mporada do sol, N 500",
  },
  {
    nome: "Rogerio",
    endereco: "Rua 10, Avenida Ivinhema, N 8970",
  },
]

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", {usuarios});
});

app.get("/novo", (req, res) => {
  res.render("formCadastro");
});

app.get("/usuario/:id", (req, res) => {
  let usuarios = {nome:"jonatam", endereco: ""};
  res.render("usuario", usuarios,);

});

app.listen(8000, () => {
  console.log("Servidor rodando!");
});
