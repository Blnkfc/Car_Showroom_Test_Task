import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Vehicle from "../Vehicles/Vehicle"

const Home = () => {
    const [vehicleList, setVehicleList] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            try{
            const result = await fetch('https://dummyjson.com/products/category/vehicle')
            const data = await result.json()
            setVehicleList(data)
            return data
            }catch(error){
                console.log(`Error fetching data: ${error}`)
            }
        }
        fetchData()
        
    }, [] )


    if(!vehicleList.products){
        return(
        <>
        Loading...
        </>)
    }else return(
        <>
        <h1>HOME</h1>
        {console.log(vehicleList.products)}
        {vehicleList.products.map((v, index) => {return <Vehicle key={v.id}  data={v} />})}
        <NavLink to='/vehicles' >VEHICLES</NavLink>
        </>
    )
}


export default Home