import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home.jsx'
import Header from './Components/Header/Header.jsx'
import Vehicles from './Components/Vehicles/Vehicle.jsx'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vehicles' element={<Vehicles />} />
      </Routes>
    </>
  )
}

export default App
