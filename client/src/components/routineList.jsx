import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const mapStateToProps = ({ routineState }) => {
  return { routineState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoutines: () => dispatch(LoadWorkouts())
  }
}

const RoutineList = (props) => {
  
  useEffect (() => {
    props.fetchRoutines()
  },[])
  
  return (
    <div>
      {props.routineState.posts.map((post) => (
        <ul key={routine.id}>
          <Link to={`/routine/${routine._id}`}>{routine.title}</Link>
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutineList)