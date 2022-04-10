import Table from './table'
import { useNavigate } from 'react-router-dom';
import Routine from '../models/routine';
import React, { Component } from 'react';
import axios from 'axios';

let navigate = useNavigate()
const createRoutine = (create) => {
  navigate(`${create.id}`)
}
const handleSubmit = (e) => {
  props.addRoutine(e)
  navigate('/create')
}
const CreateRoutine = (props) => {
  let { id } = useParams()
  useEffect(() => {
    let createRoutine = props.create.find(
      (create) => create.id === parseInt(id)
    )
    setRoutine(selectedRoutine)
  }, [props.routine, id])
}

export default CreateRoutine