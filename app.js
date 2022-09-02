const express = require('express');
// Routers
const { registrationsRouter } = require('./routes/registrations.routes');


// Initialization
const app = express();

// Enable receiving JSON data
app.use(express.json());

// Endpoint(s)
app.use('/api/v1/registrations', registrationsRouter);

// Non-existing endpoints catching
app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `We do apologize. ${req.method} ${req.url} doesn't exists in our API`
  });
});

module.exports = {app};