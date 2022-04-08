import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import routineList from './components/routineList'
import routineDetails from './components/routineDetails'

const App = () => {
  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <Routes>
        <Route path="/" element={<workoutList />} />
      </Routes>
    </div>
  )
}

export default App