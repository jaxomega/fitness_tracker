const db = require('../db')
const { Routine, Workout } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const routine1 = await new Routine({
    user: ,
    workout: [workout1._id],
  })
  await routine1.save()

  const workout1 = await new Workout({
    user: ,
    workout: ,
    duration: ,
    date: ,
    description: ,
  })
  await workout1.save()

routine1.workout = [...workout1.routine, workout1._id]
  await routine1.save()

  console.log('seeded fitnessTrackerDatabase')
}
const run = async () => {
  await Routine.deleteMany()
  await Workout.deleteMany()
  await main()
  db.close()
}

run()