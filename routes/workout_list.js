import router from '../routes/index'
import Workout from '../client/src/models/workout'
import Routine from '../client/src/models/routine';

const Routine = require('../client/src/models/routine')

router.route('/').get((req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// router.route('/add').Workout((req, res) => {
//   const workout = (req.body.workout);
//   const duration = Number(req.body.duration);
//   const description = req.body.description;

//   newWorkout
//     .save()
//     .then(() => res.json("Workout Added!"))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });

exports.Routine_create = function (req, res) {
  let routine = new Routine(
      {
        workout: Text(req.body.workout),
        duration: Number(req.body.duration),
        date: Number(req.body.date),
        description: Text(req.body.description)
      }
  );
  routine.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send("Routine Added!")
  })
};
// router.route("/update/:id").post((req, res) => {
  //   Routine.findById(req.params.id)
  //     .then(Routine => {
  //       Routine.workout = req.body.workout;
  //       Routine.duration = Number(req.body.duration);
  //       Routine.date = Date.parse(req.body.date);
  //       Routine.description = req.body.description;
        
  //       Routine
  //         .save()
  //         .then(() => res.json("Routine Updated!"))
  //         .catch(err => res.status(400).json(`Error: ${err}`));
  //     })
  //     .catch(err => res.status(400).json(`Error: ${err}`));
  // });

exports.Routine_details = function (req, res) {
  Routine.findById(req.params.id, function (err, Routine) {
      if (err) return next(err);
      res.send(Routine);
  })
};
exports.Routine_update = function (req, res) {
  Routine.findByIdAndUpdate(req.params.id, {$set: req.body},
    function (err, Routine) {
      if (err) return next(err);
      res.send("Routine Updated!");
    })
}

// router.route("/delete/:id").delete((req, res) => {
//   Routine.findAndDelete(req.params)
//     .then(() => res.json("Routine Deleted!"))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });

exports.Routine_delete = function (req, res) {
  Routine.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send("Routine Deleted!"+req.params.id)
  })
};

module.exports = router;
