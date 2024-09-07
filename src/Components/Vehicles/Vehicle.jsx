const Vehicle = (props) => {
    console.log(props)
    return(
        <>
        <h1>VEHICLES</h1>
        <h2>{props.data.id}</h2>
        </>
    )
}

export default Vehicle