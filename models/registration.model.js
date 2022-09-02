const { db, DataTypes } = require('../utils/database.util');

const Registration = db.define('registration', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  cancelledTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'working'
  }
});

module.exports = { Registration };