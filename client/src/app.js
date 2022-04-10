import './styles/style.css'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRoutine from './components/createRoutine'
import RoutineList from './components/routineList'
import RoutineDetails from './components/routineDetails'
import Table from './components/table'

<Route path="create" element={ <CreateRoutine createRoutine={CreateRoutine} handleChange={edit_row} addRoutine={CreateRoutine} />} />

const App = () => {
  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <Routes>
        <Route path="create/:id" element={ <CreateRoutine /> } />
        <Route path="details/:id" element={ <RoutineDetails /> } />
        <Route path="list/:id" element={ <RoutineList /> } />
        <Route path="/" element={ <Table /> } />
      </Routes>
    </div>
  )
}

export default App