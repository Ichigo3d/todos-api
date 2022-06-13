const mongoose = require('mongoose');

const { Schema } = mongoose;

const cardSchema = new Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  status: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Card', cardSchema);
