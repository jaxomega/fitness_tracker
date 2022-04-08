const mongoose = require('mongoose')
const RoutineSchema = require('./models/routine')
const WorkoutSchema = require('./models/workout')

const Routine = mongoose.model('Routine', RoutineSchema)
const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = {
  Routine,
  Workout
}