const express= require('express');
const app = express();
const port = 3000;

const app = require('./scr/app')

app.listen(port,()=>console.log(`Rodando na porta ${port}!`));
