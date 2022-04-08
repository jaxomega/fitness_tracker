const { Routine, Workout } = require('../models')

const getAllRoutines = async (req, res) => {
  try {
    const routines = await Routine.find()
    return res.status(200).json({ routines })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createWorkout = async (req, res) => {
  try {
    const workout = await new Workout(req.body)
    await workout.save()
    const routineId = req.body.routine
    const routine = await Workout.findById(routined)
    await Routine.findByIdAndUpdate(routineId, {
      Workouts: [...routine.workouts, workout._id]
    })
    return res.status(201).json(workout)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getRoutineDetails = async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.id)
    const routineWorkouts = []
    for await (const workoutId of routine.workouts) {
      routineWorkouts.push(await Workout.findById(workoutId))
    }
    return res.status(200).json({ routine: routine, routineWorkouts: routineWorkouts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllRoutines,
  createWorkout,
  getRoutineDetails
}