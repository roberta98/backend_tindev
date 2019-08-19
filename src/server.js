const express = require('express');

const routes = require('./routes');

const server = express();
server.use(express.json())
server.use(routes); //colocar outras configuracoes que estão em outros ambientes
server.listen(3333); 