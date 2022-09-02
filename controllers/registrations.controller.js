const { Registration } = require('../models/registration.model');

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        registrations
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegistration = async (req, res) => {
  try {
    const { regId } = req.params;

    // Finding by ID
    const registration = await Registration.findOne({where: {id: regId}});

    // Validation
    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found'
      });
    }

    // If found, returning it
    res.status(200).json({
      status: 'success',
      data: {registration}
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegistration = async (req, res) => {
  try {
    const newRegistration = await Registration.create({
      entranceTime: new Date()
    });

    res.status(201).json({
      status: 'success',
      data: {newRegistration}
    });
  } catch (error) {
    console.log(error);
  }
}

const updateRegistration = async (req, res) => {
  try {
    const { regId } = req.params;

    // Finding by ID
    const registration = await Registration.findOne({where: {id: regId}});

    // Validation
    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found'
      })
    };

    // If found, returning it
    await registration.update({status: 'out', exitTime: new Date()});

    res.status(200).json({
      status: 'success',
      data: {registration}
    });
  } catch (error) {
    console.log(error);
  }
};

const cancelRegistration = async (req, res) => {
  try {
    const { regId } = req.params;

    // Finding by ID
    const registration = await Registration.findOne({where: {id: regId}});

    // Validation
    if (!registration) {
      return res.status(404).json({
        status: 'error',
        message: 'Registration not found'
      })
    };

    // If found, returning it
    await registration.update({status: 'cancelled', cancelledTime: new Date()});

    res.status(200).json({
      status: 'success',
      data: {registration}
    });
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  getAllRegistrations,
  getRegistration,
  createRegistration,
  updateRegistration,
  cancelRegistration
}