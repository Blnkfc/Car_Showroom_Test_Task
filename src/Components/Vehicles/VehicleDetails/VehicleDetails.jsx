import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Slider from 'react-slick'
import ReviewBox from "./ReviewBox/ReviewBox.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './VehicleDetails.css'

const VehicleDetails = () => {
    const [vehicleData, setVehicleData] = useState()
    const [storedReviews, setStoredReviews] = useState([])
    const [reviewInputValue, setReviewInputValue] = useState('')
    const [newRating, setNewRating] = useState()
    const { slug } = useParams()

    var settings = {
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'vehicleDetails__carousel__imgWrapper',
    };

    class Review {
        constructor(rating, comment) {
            this.reviewerName = "Guest";
            this.reviewerEmail = "guest@email.com";
            this.rating = rating;
            this.comment = comment;
            this.date = new Date();
        }
    }


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
        setStoredReviews(JSON.parse(localStorage.getItem("reviewList")))
    }, [])
    console.log(vehicleData)


    const hanldeReviewInputChange = (event) => {
        setReviewInputValue(event.target.value)
    }

    const handleStarRating = (rating) => {
        setNewRating(rating + 1)
    }
    const addReview = () => {
        if( newRating || reviewInputValue){
        const review = new Review(newRating, reviewInputValue)
        const reviewList = localStorage.getItem('reviewList') ? JSON.parse(localStorage.getItem('reviewList')) : []
        reviewList.push(review)

        console.log(`addReview constructed review: ${JSON.stringify(review)}`)
        console.log(`addReview stored Review: ${JSON.stringify(reviewList)}`)
        localStorage.setItem('reviewList', JSON.stringify(reviewList))
        setStoredReviews(reviewList)
        setReviewInputValue('')
        setNewRating(undefined)
        }else{
            alert('Rating and comment are empty, consider filling the form.')
        }
    }


    const imgs = vehicleData?.images.map((i, index) => { return (<div> <img src={i} alt={`img${index}`} /> </div>) })

    //TODO CHECK FOR MESSAAGE AND RATING BEFORE ADDING REVIEW  
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
                    {
                        storedReviews?.map((r) => { return <ReviewBox data={r} /> })
                    }
                </div>
                <div className="commentSection__add" >
                    <h3>Add review</h3>
                    <textarea onChange={hanldeReviewInputChange} name="Review area" value={reviewInputValue} >  </textarea>
                    <button onClick={() => addReview()} >&#x271A;</button>
                    <div className="commentSection__add__starRating" >
                        {['★', '★', '★', '★', '★']
                            .map((s, index) => {
                                return (<span style={{ color: newRating == (index + 1) ? "yellow" : "white" }} onClick={() => handleStarRating(index)} >{s}</span>)
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VehicleDetails

