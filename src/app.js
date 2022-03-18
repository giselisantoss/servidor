const express = require('express');
const res = require('express/lib/responde');
const app= express();

const livros = require('./routes/livroRoutes');

const cors=require("cors");
app.use(cors());
app.use(express.static('public'))

app.use('/', livros);
app.get('*',(req,res)=>{
    res.status(404).sendFile('./views/erro.html',{root:__dirname})
})

module.exports=app