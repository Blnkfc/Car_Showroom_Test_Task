import './Header.css'
import { Link } from 'react-router-dom'
import FeedSidebar from '../Home/FeedSidebar/FeedSidebar'
import { useState } from 'react'

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
            <header className="header" >
                <Link to='/' >Home</Link>
                <div className="header__sidebar"  >
                    <button className='header__sidebar__expander' onClick={() => setIsExpanded(!isExpanded)} >&#9776;</button>
                    <div className="header__sidebar__mobile" style={{display:isExpanded?"block":"none"}} >
                        <FeedSidebar />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header