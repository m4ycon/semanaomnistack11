const express = require('express'); // importando o express
const cors = require('cors'); 
const { errors } = require('celebrate');
const routes = require('./routes'); // importa as rotas do app, "./" -> indica q n é um pacote

const app = express();

app.use(cors()); // permite que o front acesse os dados do backend, podemos passar um {origin: 'endereço'}, se ele fosse para produção
app.use(express.json()); // informando pro app q ele receberá json's, transformando isso em algo entendivel pro app "js"
app.use(routes); // usa o arquivo routes, q foi importado
app.use(errors());

module.exports = app;
