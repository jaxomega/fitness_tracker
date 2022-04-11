import { useState, useEffect } from 'react'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import CreateRoutine from './createRoutine'
import UpdateRoutine from './updateRoutine'
import RoutineList from './routineList'
import deleteRoutine from './deleteRoutine'
import Table from './table'

const RoutineDetails = (props) => {
  let { id } = useParams()
  useEffect(() => {
    let routineDetails = props.details.find(
      (details) => details.id === parseInt(id)
    )
    routineDetails(routineDetails.id)
  }, [props.details, id])

  let navigate = useNavigate()
  const routineDetails = (details) => {
    navigate(`${details.id}`)
  }

  const handleSubmit = (e) => {
    props.addRoutine(e)
    navigate('/details')
  }

  const getRoutineData = async () => {
    const response = await axios.get(`http://localhost:3001/routines/${id}`)
    console.log('RESPONSE FROM GET ROUTINE DATA:', response)
    RoutineList(response.data.routine)
    RoutineDetails(response.data.routineDetails)
  }

  useEffect(() => {
    getRoutineData()
  }, [])

  useEffect(() => {
    props.fetchRoutineDetails(id)
  }, [id])
  
  console.log('props.routineDetailsState:', props.routineDetailsState)
  const routines = props.routineDetailsState.details
  console.log('ROUTINE:', routines)
  const workoutsArray = props.routineDetailsState.workouts
  console.log('WORKOUTS:', workoutsArray)

  const handleOnTextChange = (event) => {
    props.updateWorkoutText(event.target.value)
  }

  return (
    <div>
      <h2>Routine Details Page</h2>
      <form>
        <br />
        <textarea
          placeholder="Enter description..."
          onChange={handleOnTextChange}
          value={props.postWorkoutsState.newWorkout.text}
        />
      </form>
      <div>
        <h3>{routineDetails.title}</h3>
        <p><em>{routineDetails.content}</em></p>
        <h3>Workouts:</h3>
        {workoutsArray.map((workout) => (
          <div key={workout.id}>
            <p><b>Description</b>: {workout.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// exports.RoutineDetails = function (req, res) {
//   RoutineDetails.findById(req.params.id, function (err, RoutineDetails) {
//       if (err) 
//       return (err);
//       res.send(RoutineDetails);
//   })
// };
// exports.UpdateRoutine = function (req, res) {
//   UpdateRoutine.findByIdAndUpdate(req.params.id, {$set: req.body},
//     function (err, UpdateRoutine) {
//       if (err) {
//       return (err);
//       }
//       res.send("Routine Updated!");
//     })
// }

// let navigate = useNavigate()
// const routineDetails = (details) => {
//   navigate(`${details.id}`)
// }
// const handleSubmit = (e) => {
//   props.addRoutine(e)
//   navigate('/details')
// }
// const RoutineDetails = (props) => {
//   let { id } = useParams()
//   useEffect(() => {
//     let routineDetails = props.list.find(
//       (list) => list.id === parseInt(id)
//     )
//     setRoutine(selectedRoutine)
//   }, [props.routine, id])
// }

export default RoutineDetails
