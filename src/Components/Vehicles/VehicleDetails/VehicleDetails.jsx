import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Slider from 'react-slick'
import ReviewBox from "./ReviewBox/ReviewBox.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './VehicleDetails.css'

const VehicleDetails = () => {
    const [vehicleData, setVehicleData] = useState()
    const [reviewInputValue, setReviewInputValue] = useState('')
    const { slug } = useParams()

    var settings = {
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'vehicleDetails__carousel__imgWrapper',
    };


    useEffect(() => {
        const fetchVehicleData = async () => {
            try {
                const result = await fetch(`https://dummyjson.com/products/${slug}`)
                const data = await result.json()
                setVehicleData(data)
            } catch (error) {
                console.log(`Error fetching requested product: ${error}`)
            }
        }
        fetchVehicleData()
    }, [])
    console.log(vehicleData)


    const hanldeReviewInputChange = (event) => {
        setReviewInputValue(event.target.value)
    }

    const imgs = vehicleData?.images.map((i, index) => { return (<div> <img src={i} alt={`img${index}`} /> </div>) })


    return (
        < >
            <div className="vehicleDetails" >
                <section className="vehicleDetails__carousel" >
                    <Slider {...settings}>
                        {imgs}
                    </Slider>
                </section>
                <section className="vehicleDetails__info" >
                    <h1 className="vehicleDetails__info__title" >{vehicleData?.title}</h1>
                    <div className="vehicleDetails__info__subtitle" >
                        <div>
                            {vehicleData?.tags.map((t) => { return (<button className="vehicleDetails__info__subtitle__tag" >{t}</button>) })}
                        </div>
                        <p className="vehicleDetails__info__subtitle__rating" >
                            {vehicleData?.rating} <span>&#x2605;</span>
                        </p>
                    </div>
                    <p className="vehicleDetails__info__description" >{vehicleData?.description}</p>
                    <details className="vehicleDetails__info__additional" >
                        <summary>Additional info:</summary>
                        <p>Weight: {vehicleData?.weight}</p>
                        <p>Width/Height/Depth: {vehicleData?.dimensions.width}/{vehicleData?.dimensions.height}/{vehicleData?.dimensions.depth}</p>
                        <p>Warranty: {vehicleData?.warrantyInformation} </p>
                        <p>Approx. delivery time: {vehicleData?.shippingInformation}</p>
                    </details>
                    <p className="vehicleDetails__info__price" >
                        Price: <s>{vehicleData?.price}</s>
                        <span
                            className="vehicleDetails__info__price__discounted"
                            style={{ display: (vehicleData?.discountPercentage != 0) ? "inline-block" : "none" }} >
                            {(vehicleData?.price * ((100 - vehicleData?.discountPercentage) / 100)).toFixed(2)} <sup  >-{vehicleData?.discountPercentage}%</sup>
                        </span>
                        <sub>{vehicleData?.stock} left</sub> </p>
                </section>
            </div>
            <div className="commentSection" >
                <div className="commentSection__reviews" >
                {
                    vehicleData?.reviews.map((r) => { return <ReviewBox data={r} /> })
                }
                </div>
                <div className="commentSection__add" >
                    <h3>Add review</h3>
                    <textarea onChange={hanldeReviewInputChange} name="Review area" placeholder="Write your review here" >  </textarea>
                    <button>&#x271A;</button>
                </div>
            </div>
        </>
    )
}

export default VehicleDetails

