const router = require('express').Router();
let workout = require('../log/workout');

router.route('/').get((req, res) => {
  workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  const description = req.body.description;

  const newWorkout = new Workout({ username, duration, date, description });

  newWorkout
    .save()
    .then(() => res.json("Workout Added!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
  Workout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete((req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.json("Workout Deleted!"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route("/update/:id").post((req, res) => {
  Workout.findById(req.params.id)
    .then(workout => {
      workout.username = req.body.username;
      workout.duration = Number(req.body.duration);
      workout.date = Date.parse(req.body.date);
      workout.description = req.body.description;
      
      workout
        .save()
        .then(() => res.json("Workout Updated!"))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
