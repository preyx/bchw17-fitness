const { model, Schema } = require('mongoose')

module.exports = model('workout', new Schema({
  day: {
    type: Date,
    required: true
  },
  exercises: [{
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    weight: Number,
    reps: Number,
    sets: Number,
    Distance: Number
  }]
}))
