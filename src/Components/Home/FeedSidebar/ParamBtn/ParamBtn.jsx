import useStore from "../../../../store"
import { useEffect, useState } from "react"

const ParamBtn = (props) => {
    const [clickedCounter, setClickedCounter] = useState(0)
    const setQueryParams = useStore((state) => state.setQueryParams)
    const queryParams = useStore((state) => state.queryParams)

    console.log(`Query params: ${queryParams} props: ${props.data} `)

    //Comparing current query params to button's query params
    //If negative - button is inactive, else sorting is executed
    useEffect(() => {
        if(queryParams !=`?sortBy=${props.data}&order=desc` && queryParams !=`?sortBy=${props.data}&order=asc` ){
            setClickedCounter(0)
        }
            
    }, [queryParams])

    console.log(`CLICKED: ${clickedCounter} TIMES on ${props.data}`)

    //Check for the clikedCounter to determine desc and asc sorting by repeating the button click
    //after 3'rd click, clickedCounter state is back to 0
    useEffect(() => {
        switch(clickedCounter){
            case 0: {
                setQueryParams(`?sortBy=${props.data}&order=desc`)
                break;
            }
            case 1:{
                setQueryParams(`?sortBy=${props.data}&order=desc`)
                break;
            }
            case 2:{
                setQueryParams(`?sortBy=${props.data}&order=asc`)
                break;
            }
            default:{
                setClickedCounter(0)
            }
        }
    }, [clickedCounter])


    return (
        <>
            <button className='sidebar__controls__params__btn' onClick={() => setClickedCounter(clickedCounter+1)} >
                {props.data}
                <span style={{color:clickedCounter==0?"white":clickedCounter==1?"green":clickedCounter==2?"red":"", fontWeight: "bold"}} >
                {
                clickedCounter==0?"":clickedCounter==1?"↾":clickedCounter==2?"⇂":""
                }
                </span>
                </ button>
        </>
    )
}

export default ParamBtn