const { Router } = require('express')
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/routine', controllers.getAllRoutines)

router.get('/routine/:id', controllers.getWorkoutsByRoutineId)

router.get('/workout', controllers.createWorkout)

module.exports = router;
