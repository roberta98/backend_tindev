const express = require('express');

const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController')
const DislikesController = require('./controllers/DislikesController');

const routes = new express.Router();

routes.post("/devs", DevController.store);
routes.post('/devs/:devId/likes', LikeController.store); 
routes.post('/devs/:devId/dislikes', DislikesController.store); 
routes.get('/devs', DevController.index);

module.exports = routes;  