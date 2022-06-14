const mongoose = require('mongoose');

module.exports = function dbConnect() {
  mongoose.connect(
    'mongodb+srv://ichigo3d:Le@rning!984@cluster0.nb2vx7y.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connected');
  });
};
