import './App.css'
import { Routes, Route } from 'react-router'
import HomeRoute from './routes/Home.route'
import DashboardRoute from './routes/Dashboard.route'

function App() {

  return (
    <main className='h-screen p-4'>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/dashboard/*" element={<DashboardRoute />}>
            <Route path="articles" element={<div>Articles</div>} />
            <Route path="dynamic-test" element={<div>Dynamic Test</div>} />
        </Route>
      </Routes>
    </main>
  )
}

export default App