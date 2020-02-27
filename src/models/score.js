var mongoose = require('mongoose');

const scoreSchema = {
  name: {
    type: String,
    required: true
  },
  score: {
    type: String,
    required: true
  }
};

module.exports = mongoose.model('Score', scoreSchema);
