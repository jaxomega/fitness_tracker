import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CreateRoutine from './createRoutine'
import UpdateRoutine from './updateRoutine'
import RoutineDetails from './routineDetails'
import deleteRoutine from './deleteRoutine'
import Table from './table'

const RoutineList = (props) => {
  
  useEffect (() => {
    props.fetchRoutines()
  },[])
  
  return (
    <div>
      {props.routineState.posts.map((post) => (
        <ul key={RoutineList.id}>
          <RoutineList to={`/routine/${RoutineList._id}`}>{RoutineList.title}</RoutineList>
        </ul>
      ))}
    </div>
  )
}

// let navigate = useNavigate()

// const routineList = (list) => {
//   navigate(`${list.id}`)
// }
// const handleSubmit = (e) => {
//   props.addRoutine(e)
//   navigate('/list')
// }
// const RoutineList = (props) => {
//   let { id } = useParams()
//   useEffect(() => {
//     let routineList = props.list.find(
//       (list) => list.id === parseInt(id)
//     )
//     setRoutine(selectedRoutine)
//   }, [props.routine, id])
// }

export default RoutineList
