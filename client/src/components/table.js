import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='navbar'>
            <h4>Routine Table</h4>
            <div>
                <Link to="/">Table</Link>
                <Link to ="create">CreateRoutine</Link>
                <Link to ="details">RoutineDetails</Link>
                <Link to ="list">RoutineList</Link>
            </div>
        </nav>
    )
}

export default Nav