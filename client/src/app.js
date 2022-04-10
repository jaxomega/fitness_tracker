import './styles/style.css'
import Route from 'react'
import Routes from 'router-dom'
import CreateRoutine from './components/createRoutine'
import RoutineList from './components/routineList'
import RoutineDetails from './components/routineDetails'

const App = () => {
  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <Routes>
        <Route path="" element={<createWorkout />} />
        <Route path="" element={<RoutineDetails />} />
        <Route path="" element={<RoutineList />} />
      </Routes>
    </div>
  )
}

export default App