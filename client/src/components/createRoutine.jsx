import Table from './table'
import { useNavigate } from 'react-router-dom';
import Routine from '../models/routine';
import React, { Component } from 'react';
import axios from 'axios';

let navigate = useNavigate()
const createRoutine = (create) => {
  navigate(`${create.id}`)
}
const CreateRoutine = (props) => {
  let { id } = useParams()
  useEffect(() => {
    let createRoutine = props.create.find(
      (create) => create.id === parseInt(id)
    )
    setRoutine(selectedRoutine)
  }, [props.routine, id])
  
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
  export default createRoutine
