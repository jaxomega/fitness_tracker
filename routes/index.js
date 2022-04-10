import workout from '../models/workout'

const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/routine', controllers.getAllRoutines)

router.get('/routine/:id', controllers.getWorkoutsByRoutineId)

router.get('/workout', controllers.createWorkout)

export default index