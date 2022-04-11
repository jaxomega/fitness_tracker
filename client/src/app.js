import './styles/style.css'
import { useEffect } from 'react'
import React, { useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import CreateRoutine from './components/createRoutine'
import RoutineList from './components/routineList'
import RoutineDetails from './components/routineDetails'
import UpdateRoutine from './components/updateRoutine'
import Table from './components/table'

<Route path="create" element={ <CreateRoutine createRoutine={CreateRoutine} handleChange={UpdateRoutine} addRoutine={CreateRoutine} />} />

const App = () => {
  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <Routes>
        <Route path="create/:id" element={ <CreateRoutine /> } />
        <Route path="details/:id" element={ <RoutineDetails /> } />
        <Route path="list/:id" element={ <RoutineList /> } />
        <Route path="update/:id" element={ <UpdateRoutine /> } />
        <Route path="/" element={ <Table /> } />
      </Routes>
    </div>
  )
}

export default App