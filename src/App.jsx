import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Vehicles from './Components/Vehicles/Vehicle'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vehicles' element={<Vehicles />} />
      </Routes>
    </>
  )
}

export default App
