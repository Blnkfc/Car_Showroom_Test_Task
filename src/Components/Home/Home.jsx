import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import './Home.css'
import useStore from '../../store.js'
import Vehicle from "../Vehicles/Vehicle.jsx"
import FeedSidebar from "./FeedSidebar/FeedSidebar.jsx"

const Home = () => {
    const [vehicleList, setVehicleList] = useState([])
    const queryParams = useStore((state) => state.queryParams)
    const setQueryParams = useStore((state) => state.setQueryParams)


    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(queryParams)
                const result = await fetch(`https://dummyjson.com/products/${queryParams.includes('search?q')?queryParams:`category/vehicle${queryParams}`}`)
                const data = await result.json()
                setVehicleList(data)
                return data
            } catch (error) {
                console.log(`Error fetching data: ${error}`)
            }
        }
        fetchData()

    }, [queryParams])


    if (!vehicleList.products) {
        return (
            <>
                Loading...
            </>)
    } else return (
        <>
            {console.log(vehicleList.products)}
            <div className="homepage" >
                <section className="homepage__feed" >
                    {vehicleList.products
                        .map((v, index) => {
                            if (v.category == 'vehicle') {
                                return <Vehicle key={v.id} data={v} />
                            }
                        })}

                </section>
                <FeedSidebar />
            </div>
        </>
    )
}


export default Home