import './styles/style.css'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import deleteRoutine from './components/deleteRoutine'
import CreateRoutine from './components/createRoutine'
import RoutineList from './components/routineList'
import RoutineDetails from './components/routineDetails'
import UpdateRoutine from './components/updateRoutine'
import Table from './components/table'
import axios from 'axios'

<Route path="create" element={ <CreateRoutine createRoutine={CreateRoutine} handleChange={UpdateRoutine} addRoutine={CreateRoutine} />} />

const App = () => {
  
useEffect(async() => {
  const allroutines = await axios.get('http://localhost:3001/routines')
  console.log(allroutines)
})

  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <Routes>
        {/* <Route path="/" element={ <Table /> } /> */}
        {/* <Route path="create/:id" element={ <CreateRoutine /> } />
        <Route path="details/:id" element={ <RoutineDetails /> } />
        <Route path="list/:id" element={ <RoutineList /> } />
        <Route path="delete/:id" element={ <deleteRoutine /> } />
        <Route path="update/:id" element={ <UpdateRoutine /> } /> */}
      </Routes>
    </div>
  )
}

export default App