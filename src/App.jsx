import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home.jsx'
import Header from './Components/Header/Header.jsx'
import Vehicles from './Components/Vehicles/Vehicle.jsx'
import VehicleDetails from './Components/Vehicles/VehicleDetails/VehicleDetails.jsx'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/vehicles/:slug' element={<VehicleDetails />} />
      </Routes>
    </>
  )
}

export default App
