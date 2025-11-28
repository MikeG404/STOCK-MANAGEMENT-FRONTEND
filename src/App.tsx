import './App.css'
import { Routes, Route } from 'react-router'
import HomeRoute from './routes/Home.route'
import DashboardRoute from './routes/Dashboard.route'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/dashboard" element={<DashboardRoute />} />
    </Routes>
  )
}

export default App
