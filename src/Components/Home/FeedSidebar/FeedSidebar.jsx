import './FeedSidebar.css'
import useStore from '../../../store.js'
import { useState } from 'react';

const FeedSidebar = () => {
    const [inputValue, setInputValue] = useState('');
    const setQueryParams = useStore((state) => state.setQueryParams)
    const tags = useStore((state) => state.tags)
    const sortParams = useStore((state) => state.sortParams)


    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSeacrh = () => {
        if (inputValue != '') {
            setQueryParams(`search?q=${inputValue}`)
        } else { setQueryParams('') }
    }

    return (
        <>
            <section className='sidebar' >
                <h2 className='sidebar__title' >Search </h2>
                <div className='sidebar__search' >
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                    <button onClick={handleSeacrh} > <img src="https://cdn-icons-png.flaticon.com/512/11741/11741045.png" alt="Search" /> </button>
                </div>
                <div className='sidebar__controls' >
                    <h3>Search by car type</h3>
                    <div className='sidebar__controls__tags'>
                        {tags.map((t) => {
                            if (t) {
                                return <button className='sidebar__controls__tags__btn' onClick={() => setInputValue(t)} >{t}</button>
                            }
                        })}
                    </div>
                    <h3>Sort by parameters</h3>
                    <div className='sidebar__controls__params'>
                        {sortParams.map((p) => {
                            if(p){
                                return <button className='sidebar__controls__params__btn' onClick={() => setQueryParams(`?sortBy=${p}&order=desc`) } >{p}</ button>  
                            }
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeedSidebar