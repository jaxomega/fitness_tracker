import workout from '../client/src/models/workout'
import routine from '../client/src/models/routine'

const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/routine/create', controllers.createRoutine)

router.get('/routine/:id', controllers.routine_details)

router.put('/routine/:id', controllers.routine_update)

router.delete('/routine/:id/delete', controllers.routine_delete)

module.exports = router;
export default index
