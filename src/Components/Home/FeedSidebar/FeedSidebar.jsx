import './FeedSidebar.css'
import useStore from '../../../store.js'
import { useState } from 'react';

const FeedSidebar = () => {
    const [inputValue, setInputValue] = useState('');
    const setQueryParams = useStore((state) => state.setQueryParams)


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSeacrh = () => {
        if(inputValue != ''){
            setQueryParams(`search?q=${inputValue}`)
        }else {setQueryParams('')} 
    }

    return (
        <>
            <section className='sidebar' >
                <h2 className='sidebar__title' >Search </h2>
                <div className='sidebar__search' >
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                    <button onClick={handleSeacrh()} > <img src="https://cdn-icons-png.flaticon.com/512/11741/11741045.png" alt="Search" /> </button>
                </div>
                <div className='sidebar__controls' >
                    
                </div>
            </section>
        </>
    )
}

export default FeedSidebar