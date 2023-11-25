const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => {
    console.log('DB is connected 🎉');
  })
  .catch((err) => {
    console.log('DB connection failed with error : ' + err);
  });
