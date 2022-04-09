import { useState, useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import createWorkout from './createWorkout'

const mapStateToProps = ({ routineDetailsState }) => {
  return { routineDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoutineDetails: (id) => dispatch(LoadRoutineDetails(id)),
    updateWorkoutUser: (userName) => dispatch(UpdateWorkoutUser(userName)),
    UpdateWorkoutDescription: (workoutDescription) => dispatch(UpdateWorkoutDescription(workoutDescription))
  }
}

const RoutineDetails = (props) => {
  let { id } = useParams()
  const [routine, setRoutine] = useState({})
  const [workout, setWorkout] = useState([])

  const getRoutineData = async () => {
    const response = await axios.get(`http://localhost:3001/routiness/${id}`)
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

  const createWorkout = async (event) => {
    event.preventDefault()
    await axios
      .routine('http://localhost:3001/workout', setWorkout)
      .then(function (response) {
        getWorkoutData()
      })
      .catch(function (error) {
        console.log(error)
      })
    setNewWorkout({
      user: '',
      workout: workout.id,
      description: ''
    })
  }
  console.log('props.routineDetailsState:', props.routineDetailsState)
  const routines = props.routineDetailsState.details
  console.log('ROUTINE:', routines)
  const workoutsArray = props.routineDetailsState.workouts
  console.log('WORKOUTS:', workoutsArray)

  const handleOnUserChange = (event) => {
    props.updateWorkoutUser(event.target.value)
  }

  const handleOnTextChange = (event) => {
    props.updateWorkoutText(event.target.value)
  }

  return (
    <div>
      <h2>Routine Details Page</h2>
      <form>
        <input
          type="text"
          placeholder="Enter user name..."
          onChange={handleOnUserChange}
          value={props.routineDetailsState.newWorkout.user}
        />
        <br />
        <textarea
          placeholder="Enter description..."
          onChange={handleOnTextChange}
          value={props.postWorkoutsState.newWorkout.text}
        />
      </form>
      <div>
        <h3>{details.title}</h3>
        <p><em>{details.content}</em></p>
        <h3>Workouts:</h3>
        {workoutsArray.map((workout) => (
          <div key={workout.id}>
            <p><b>User</b>: {workout.user}</p>
            <p><b>Description</b>: {workout.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutineDetails)