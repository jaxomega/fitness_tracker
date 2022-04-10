import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Routine from '../models/routine'
import Table from './table'

let navigate = useNavigate()
const routineList = (list) => {
  navigate(`${list.id}`)
}
const handleSubmit = (e) => {
  props.addRoutine(e)
  navigate('/list')
}
const RoutineList = (props) => {
  let { id } = useParams()
  useEffect(() => {
    let routineList = props.list.find(
      (list) => list.id === parseInt(id)
    )
    setRoutine(selectedRoutine)
  }, [props.routine, id])
}
export default RoutineList
