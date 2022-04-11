import Table from './table'
import { useNavigate, useParams } from 'react-router-dom';
import Routine from '../models/routine';
import React, { Component, useEffect } from 'react';
import axios from 'axios';

const CreateRoutine = (props) => {
  let { id } = useParams()
  useEffect(() => {
    let createRoutine = props.create.find(
      (create) => create.id === parseInt(id)
    )
    setRoutine(selectedRoutine)
  }, [props.routine, id])
  
  let navigate = useNavigate()
  const CreateRoutine = (create) => {
    navigate(`${create.id}`)
  }

  const handleSubmit = (e) => {
    props.addRoutine(e)
    navigate('/create')
  }
  
const createRoutine = ({ createRoutine, handleInputChange, newRoutine }) => {
      return (
      <div className="form-container">
        <h2>Routine</h2>
        <form onSubmit={createRoutine}>
          <div className="form-field">
            <label><b>Workout</b>:</label>
            <input name="text" type="textarea" onChange={handleInputChange} placeholder="Workout..." value={newRoutine.text} required />
          </div>
          <div className="form-field">
            <label><b>Duration</b>:</label>
            <input name="text" type="textarea" onChange={handleInputChange} placeholder="Duration..." value={newRoutine.text} required />
          </div>
          <div className="form-field">
            <label><b>Description</b>:</label>
            <input name="text" type="textarea" onChange={handleInputChange} placeholder="Description..." value={newRoutine.text} required />
          </div>
          <div className="button-wrapper">
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
  
  exports.Routine_create = function (req, res) {
    let routine = new Routine(
        {
          workout: Text(req.body.workout),
          duration: Number(req.body.duration),
          date: Number(req.body.date),
          description: Text(req.body.description)
        }
    );
    routine.save(function (err) {
        if (err) {
        return (err);
        }
        res.send("Routine Added!")
    })
  };
  }

//   let navigate = useNavigate()
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

  export default CreateRoutine
