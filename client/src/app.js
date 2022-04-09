import './styles/style.css'
import { Routes, Route } from 'react-router-dom'
import createWorkout from './components/createWorkout'
import RoutineDeatils from './components/routineDeatils'
import RoutineList from './components/routineList'

const App = () => {
  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <Routes>
        <Route path="" element={<createWorkout />} />
        <Route path="" element={<RoutineDeatils />} />
        <Route path="" element={<RoutineList />} />
      </Routes>
    </div>
  )
}

export default App