const express = require('express');
// Controllers
const {getAllRegistrations, getRegistration, createRegistration, updateRegistration, cancelRegistration} = require('../controllers/registrations.controller');

const registrationsRouter = express.Router();

registrationsRouter.get('/', getAllRegistrations);
registrationsRouter.get('/:regId', getRegistration);
registrationsRouter.post('/', createRegistration);
registrationsRouter.patch('/:regId', updateRegistration);
registrationsRouter.delete('/:regId', cancelRegistration);

module.exports = { registrationsRouter };