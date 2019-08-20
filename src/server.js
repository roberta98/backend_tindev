const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://admin:admin123@cluster0-cealv.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser : true
})

server.use(express.json())
server.use(routes); //colocar outras configuracoes que estão em outros ambientes
server.listen(3333);  