import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Vehicle from "../Vehicles/Vehicle"

const Home = () => {
    const [vehicleList, setVehicleList] = useState()
    useEffect(() => {
        const fetchData = async() => {
            const result = await fetch('https://dummyjson.com/products/category/vehicle')
            const data = await result.json()
            setVehicleList(data)
            return data
        }
        fetchData()
    }, )

    const vehicles = vehicleList.map((v, index) => { <Vehicle data={v} /> })

    return(
        <>
        <h1>HOME</h1>
        {vehicles}
        <NavLink to='/vehicles' >VEHICLES</NavLink>
        </>
    )
}


export default Home