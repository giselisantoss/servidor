const express=require('express');
const route = express.Router();
const conntoller = require('../controller/livroController')

route.get('/livros',conntoller.getAll);
route.get('/livros/:id',conntoller.getByID)
route.get('/livros/:titulo',conntoller.getbyTitle)

module.exports=route