import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Routine from '../models/routine'
import Table from './table'

let navigate = useNavigate()
const routineList = (list) => {
  navigate(`${list.id}`)
}
const RoutineList = (props) => {
  let { id } = useParams()
  useEffect(() => {
    let routineList = props.list.find(
      (list) => list.id === parseInt(id)
    )
    setRoutine(selectedRoutine)
  }, [props.routine, id])

const RoutineList = (props) => {
  
  return (
    <div>
      {props.routineState.posts.map((post) => (
        <ul key={Routine.id}>
          <Link to={`/routine/${Routine._id}`}>{Routine.title}</Link>
        </ul>
      ))}
    </div>
  )
}
}
export default RoutineList
