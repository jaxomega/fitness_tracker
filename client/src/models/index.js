const mongoose = require('mongoose')
const RoutineSchema = require('./routine')
const WorkoutSchema = require('./workout')

const Routine = mongoose.model('Routine', RoutineSchema)
const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = {
  Routine,
  Workout
}