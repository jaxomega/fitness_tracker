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
const handleSubmit = (e) => {
  props.addRoutine(e)
  navigate('/details')
}
const RoutineDetails = (props) => {
  let { id } = useParams()
  useEffect(() => {
    let routineDetails = props.list.find(
      (list) => list.id === parseInt(id)
    )
    setRoutine(selectedRoutine)
  }, [props.routine, id])
}

export default RoutineDetails