import router from './index'
import Workout from '../client/src/models/workout'
import Routine from '../client/src/models/routine';

const Routine = require('../client/src/models/routine')

router.route('/').get((req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/delete/:id").delete((req, res) => {
  Routine.findAndDelete(req.params)
    .then(() => res.json("Routine Deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/update/:id").post((req, res) => {
    Routine.findById(req.params.id)
      .then(Routine => {
        Routine.workout = req.body.workout;
        Routine.duration = Number(req.body.duration);
        Routine.date = Date.parse(req.body.date);
        Routine.description = req.body.description;
        
        Routine
          .save()
          .then(() => res.json("Routine Updated!"))
          .catch(err => res.status(400).json(`Error: ${err}`));
      })
      .catch(err => res.status(400).json(`Error: ${err}`));
  });

router.route('/add').Workout((req, res) => {
  const workout = (req.body.workout);
  const duration = Number(req.body.duration);
  const description = req.body.description;

  newWorkout
    .save()
    .then(() => res.json("Workout Added!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
export default workout_list
