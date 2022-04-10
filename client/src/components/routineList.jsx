import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Routine from '../models/routine'
import Table from './table'

const RoutineList = (props) => {
  
  useEffect (() => {
    props.fetchRoutines()
  },[])
  
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

export default RoutineList
