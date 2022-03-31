const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    user: { type: String, required: true },
    workout: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    delete: {type: button, required: true},
  },
  {
    timestamps: true
  }
);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
