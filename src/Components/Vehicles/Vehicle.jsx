import './Vehicle.css'
import { Link } from 'react-router-dom'

const Vehicle = (props) => {
    return (
        <>
            <div className="vehicle" >
                <h3 className='vehicle__name' >{props.data.title}</h3>
                <div className='vehicle__thumbnail' >
                    <img src={props.data.thumbnail} alt="Thumbnail" />
                </div>
                <Link to={`/vehicles/${props.data.id}`} className='vehicle__link'  >Check out <span> &#8594; </span>  </Link>
            </div>
        </>
    )
}

export default Vehicle