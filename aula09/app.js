//fazer a importaçao do express
const express = require('express');

//rotas (quando oservidor for acessado, pra onde ele vai???)
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('Olá Mundo!!!');
});

//configuraçoes basicas do aplicativo
const app = express();
app.use('/',router);
modulo.exports = app; //exportando o app, pois iremos importa-lo no