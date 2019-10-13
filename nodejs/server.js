const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//Iniciando o App
const app = express();
app.use(express.json());
//disponivel para acessar publicamente sem parametro no cors
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
//require('./src/models/Product');
requireDir('./src/models');


/* Não utiliza mais aqui
const Product = mongoose.model('Product');
*/

// Rotas
app.use('/api', require('./src/routes'));



app.listen(3001);