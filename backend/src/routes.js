const express = require('express');

const OngController = require('./controlles/OngControllers');
const IncidentController = require('./controlles/IncidentController');
const ProfileController = require('./controlles/ProfileController');
const SessionController = require('./controlles/SessionController');


const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

// exportar as rotas
module.exports = routes;