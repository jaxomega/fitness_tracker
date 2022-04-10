import router from './index'
import Workout from '../client/src/models/workout'
import Routine from '../client/src/models/routine';

const Routine = require('../client/src/models/routine')

router.route('/').get((req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// router.route("/delete/:id").delete((req, res) => {
//   Routine.findAndDelete(req.params)
//     .then(() => res.json("Routine Deleted!"))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });

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

// router.route('/add').Workout((req, res) => {
//   const workout = (req.body.workout);
//   const duration = Number(req.body.duration);
//   const description = req.body.description;

//   newWorkout
//     .save()
//     .then(() => res.json("Workout Added!"))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });



// exports.Routine_create = function (req, res) {
//   let routine = new Routine(
//       {
//         workout: Text(req.body.workout),
//         duration: Number(req.body.duration),
//         date: Number(req.body.date),
//         description: Text(req.body.description)
//       }
//   );
  
//   routine.save(function (err) {
//       if (err) {
//           return next(err);
//       }
//       res.send("Routine Added!")
//   })
// };

// exports.Routine_details = function (req, res) {
//   Routine.findById(req.params.id, function (err, Routine) {
//       if (err) return next(err);
//       res.send(Routine);
//   })
// };

// exports.Routine_update = function (req, res) {
//   Routine.findByIdAndUpdate(req.params.id, {$set: req.body},
//     function (err, Routine) {
//       if (err) return next(err);
//       res.send("Routine Updated!");
//     })
// }

// exports.Routine_delete = function (req, res) {
//   Routine.findByIdAndRemove(req.params.id, function (err) {
//       if (err) return next(err);
//       res.send("Routine Deleted!"+req.params.id)
//   })
// };



function edit_routine(no)
{
 document.getElementById("edit_button"+no).style.display = "none";
 document.getElementById("save_button"+no).style.display = "block";
	
 var workout = document.getElementById("workout"+no);
 var duration = document.getElementById("duration"+no);
 var description = document.getElementById("description"+no);
	
 var workout_data = workout.innerHTML;
 var duration_data = duration.innerHTML;
 var description_data = description.innerHTML;
	
 workout.innerHTML = +workout_data;
 duration.innerHTML = +duration_data;
 description.innerHTML = +description_data;
}

function save_routine(no)
{
 var workout_val = document.getElementById("workout_text"+no).value;
 var duration_val = document.getElementById("duration_text"+no).value;
 var description_val = document.getElementById("description_text"+no).value;

 document.getElementById("workout_row"+no).innerHTML = workout_val;
 document.getElementById("duration_row"+no).innerHTML = duration_val;
 document.getElementById("description_row"+no).innerHTML = description_val;

 document.getElementById("edit_button"+no).style.display = "block";
 document.getElementById("save_button"+no).style.display = "none";
}

function delete_routine(no)
{
 document.getElementById("row"+no+"").outerHTML = "";
}

function add_routine()
{
 var new_workout = document.getElementById("new_workout").value;
 var new_duration = document.getElementById("new_duration").value;
 var new_description = document.getElementById("new_description").value;
	
 var table = document.getElementById("routineTable");
 var table_len = (table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML = row+table_len

 document.getElementById("new_workout").value = "";
 document.getElementById("new_duration").value = "";
 document.getElementById("new_description").value = "";
}
module.exports = router;
export default workout_list
