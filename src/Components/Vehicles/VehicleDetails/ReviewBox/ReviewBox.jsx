import './ReviewBox.css'


const ReviewBox = (props) => {

    const date = new Date(props?.data.date)
    return (
        <div className="review" >
            <div className="review__sender">
                <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Avatar" className='review__sender__avatar' />
                <div className='review__sender__info' >
                    <p className='review__sender__info__name' > {props?.data.reviewerName}</p>
                    <p className='review__sender__info__email' >{props?.data.reviewerEmail} </p>
                </div>
                <p className='review__sender__rating' >{props?.data.rating} <span>&#x2605;</span> </p>
            </div>
            <section className='review__content' >
                {props?.data.comment}
            </section>
            <p className='review__date' >{date.toDateString()}</p>
        </div>
    )
}

export default ReviewBox