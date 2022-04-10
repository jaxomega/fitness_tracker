import { useState, useEffect } from 'react'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import createWorkout from './createRoutine'
import Table from './table'
import Routine from '../models/routine'
import Workout from '../models/workout'

let navigate = useNavigate()
const routineDetails = (details) => {
  navigate(`${details.id}`)
}

const RoutineDetails = (props) => {
  let { id } = useParams()
  useEffect(() => {
    let routineDetails = props.details.find(
      (details) => details.id === parseInt(id)
    )
    setDetails(selectedDetails)
  }, [props.details, id])

  const handleSubmit = (e) => {
    props.addRoutine(e)
    navigate('/details')
  }

  const getRoutineData = async () => {
    const response = await axios.get(`http://localhost:3001/routines/${id}`)
    console.log('RESPONSE FROM GET ROUTINE DATA:', response)
    setRoutine(response.data.routine)
    setWorkout(response.data.routineDetails)
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
        <h3>{routine.title}</h3>
        <p><em>{routine.content}</em></p>
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

exports.Routine_details = function (req, res) {
  Routine.findById(req.params.id, function (err, Routine) {
      if (err) 
      return (err);
      res.send(Routine);
  })
};
exports.Routine_update = function (req, res) {
  Routine.findByIdAndUpdate(req.params.id, {$set: req.body},
    function (err, Routine) {
      if (err) {
      return (err);
      }
      res.send("Routine Updated!");
    })
}

export default RoutineDetails
