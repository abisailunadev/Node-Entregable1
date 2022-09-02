const { app } = require('./app');
// Utils
const { db } = require('./utils/database.util');

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    const PORT = '4500';
    app.listen(PORT, () => {
      console.log('Express App running!')
    });
  } catch (error) {
   console.log(error) ;
  }
};

startServer();