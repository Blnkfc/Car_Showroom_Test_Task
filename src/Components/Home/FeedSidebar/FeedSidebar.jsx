import './FeedSidebar.css'
import useStore from '../../../store.js'
import { useEffect, useState } from 'react';
import ParamBtn from './ParamBtn/ParamBtn.jsx';

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
    useEffect(() => {
        handleSeacrh()
    }, [inputValue])

    return (
        <>
            <section className='sidebar' >
                <h2 className='sidebar__title' >Search </h2>
                <div className='sidebar__search' >
                    <input type="text" value={inputValue} onChange={handleInputChange} />
                    <button  className='sidebar__search__searchBtn' onClick={handleSeacrh} > <img src="https://cdn-icons-png.flaticon.com/512/11741/11741045.png" alt="Search" /> </button>
                    <button className='sidebar__search__clear' onClick={() => setInputValue("")} style={{ display: inputValue == "" ? "none" : "inline-block" }} > X </button>
                </div>
                <div className='sidebar__controls' >
                    <h3>Search by car type</h3>
                    <div className='sidebar__controls__tags'>
                        {tags.map((t) => {
                            if (t) {
                                return <button className='sidebar__controls__tags__btn' onClick={() => { setInputValue(t), handleSeacrh() }} >{t}</button>
                            }
                        })}
                    </div>
                    <h3>Sort by parameters</h3>
                    <div className='sidebar__controls__params'>
                        {sortParams.map((p) => {
                            if (p) {
                                return <ParamBtn data={p} /> 
                            }
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeedSidebar