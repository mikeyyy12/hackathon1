
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  // correct imports
import NewComp from './components/New'
import EventsList from './components/Event'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewComp />} />
         <Route path="/event" element={<EventsList />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

