const mongoose = require('mongoose');

module.exports = function dbConnect() {
  mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connected');
  });
};
